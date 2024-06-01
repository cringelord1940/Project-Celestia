/* eslint-disable react-hooks/rules-of-hooks */
import type { Metadata } from 'next'
import type { GetProjectResult } from '@types'
import { gql } from 'graphql-request'
import * as FALLBACK from '@components/post/error'
import { useFetchQL } from '@nexel/nextjs/libs/hooks/data'
import { env } from '@env'
import { FETCH } from '@/enums'
import { getProject } from '@/utils'
import { Layout } from './page.layout'
import { ContentLayout } from './content.layout'
import { Header } from './header'
import { ProjectInfo } from './info'
import { Blocks } from './blocks'
import { RelatedProjects } from './relatedProject'

type PageProps = {
  params: { slug: string }
  searchParams: { preview: string }
}

const endpointURL = env.GRAPHQL_PROJECT_URL

export const generateMetadata = async ({
  params: { slug },
  searchParams: { preview },
}: PageProps): Promise<Metadata> => {
  try {
    const requestQL = gql`
      query Project($slug: String!) {
        project_old(where: { slug: $slug }) {
          title
          excerpt
          coverImage {
            url
            width
            height
          }
        }
      }
    `
    const HeaderOption =
      preview === 'true'
        ? {
            'gcms-stage': 'DRAFT',
          }
        : {}
    const { project_old: project } = await useFetchQL(
      endpointURL,
      { query: requestQL, variables: { slug } },
      {
        revalidate: preview || process.env.NODE_ENV === 'development' ? 0 : 180,
        headers: HeaderOption,
      },
    )

    return {
      title: project.title,
      description: project.excerpt,
      openGraph: {
        title: project.title,
        images: [project.coverImage],
      },
      twitter: {
        card: 'summary_large_image',
        title: project.title,
        description: project.excerpt,
        images: [project.coverImage],
      },
    }
  } catch (error) {
    return {
      title: 'Post not found | IceJiVerse',
    }
  }
}

async function Page({ params: { slug } }: PageProps) {
  const data: GetProjectResult = await getProject(slug)

  if (data.status === FETCH.ERROR) {
    return (
      <FALLBACK.ConnectionError
        title='PROJECT'
        backURL='/project'
        error={data.error}
      />
    )
  }

  if (!data.project) {
    return <FALLBACK.NotFound title='PROJECT' backURL='/project' />
  }

  const project = data.project

  return (
    <>
      <Layout
        title={project.title}
        tagline={project.tagline}
        slug={project.slug}
      >
        <Header
          header={project.header}
          title={project.title}
          tag={project.tag}
        />
        <ContentLayout>
          <ProjectInfo projectInfo={project.projectInfo} />
          <Blocks blocks={project.blocks} />
          <RelatedProjects projects={project.relatedProjects} />
        </ContentLayout>
      </Layout>
    </>
  )
}

export default Page
