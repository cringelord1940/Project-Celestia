/* eslint-disable react-hooks/rules-of-hooks */
import type { GetProject } from '@types'
import { gql } from 'graphql-request'
import { useFetchQL } from '@nexel/nextjs/libs/hooks/data'
import { env } from '@env'
import { FETCH } from '@/enums'

const getProject: GetProject = async (slug, isPreview) => {
  try {
    const requestQL = gql`
      query Project($slug: String!) {
        project(where: { slug: $slug }) {
          title
          slug
          id
          tagline
          excerpt
          featured
          tag
          website
          updatedAt
          projectType
          projectCategory {
            title
            slug
          }
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
          blocks {
            ... on Content {
              blockType
              number
              title
              content {
                html
              }
            }
            ... on Image {
              blockType
              title
              description
              imageType
              images {
                url
                width
                height
              }
              fillColor {
                hex
              }
            }
            ... on Video {
              blockType
              title
              source
              url
            }
            ... on ColorPalette {
              blockType
              color
            }
            ... on Grid {
              blockType
              title
              items
            }
            ... on Marquee {
              blockType
              marqueeType
              line
              rotate
              word
            }
            ... on Quote {
              blockType
              text {
                html
              }
            }
          }
          relatedProjects {
            title
            tagline
            tag
            slug
            coverImage {
              url
              width
              height
              mimeType
            }
          }
        }
      }
    `

    const HeaderOption = isPreview
      ? {
          'gcms-stage': 'DRAFT',
        }
      : {}

    const { project } = await useFetchQL(
      env.GRAPHQL_PROJECT_URL,
      { query: requestQL, variables: { slug } },
      {
        revalidate: 180,
        headers: HeaderOption,
      },
    )

    return { status: FETCH.SUCCESS, project }
  } catch (error) {
    return { status: FETCH.ERROR, error }
  }
}

export { getProject }
