/* eslint-disable react-hooks/rules-of-hooks */
import { gql } from 'graphql-request'
import { useFetchQL } from '@nexel/nextjs/libs/hooks/data'
import { env } from '@env'
import { FETCH } from '@/enums'

const getProject = async (slug: string) => {
  try {
    const requestQL = gql`
      query Project($slug: String!) {
        project(where: { slug: $slug }) {
          title
          slug
          tagline
          excerpt
          featured
          tag
          website
          updatedAt
          projectType
          coverImage {
            url
            width
            height
            mimeType
          }
          colorIdentity {
            hex
          }
          header {
            selectHeaderType
            headerGallery {
              url
              width
              height
              mimeType
            }
          }
          projectInfo {
            infoType
            services
            industry
            date
            client
          }
          sections {
            ... on GalleryPhoneMockup {
              id
              galleryPhoneMockup {
                width
                url
                height
              }
            }
            ... on Content {
              id
              number
              title
              content {
                html
              }
            }
          }
        }
      }
    `

    const { project_old: project } = await useFetchQL(
      env.GRAPHQL_PROJECT_URL,
      { query: requestQL, variables: { slug } },
      180,
    )

    return { status: FETCH.SUCCESS, project }
  } catch (error) {
    return { status: FETCH.ERROR, error }
  }
}

export { getProject }
