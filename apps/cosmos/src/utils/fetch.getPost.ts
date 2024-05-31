/* eslint-disable react-hooks/rules-of-hooks */
import type { GetPost } from '@types'
import { gql } from 'graphql-request'
import { useFetchQL } from '@nexel/nextjs/libs/hooks/data'
import { env } from '@env'
import { FETCH } from '@/enums'

import { MockPost } from '@/mocks/post.mock'

export const getPost: GetPost = async (slug, isPreview) => {
  const endpointURL = env.GRAPHQL_POST_URL
  try {
    const requestQL = gql`
      query Post($slug: String!) {
        post(where: { slug: $slug }) {
          title
          tag
          slug
          featured
          excerpt
          date
          createdAt
          updatedAt
          coverImage {
            url
            width
            height
          }
          postCategory {
            title
            slug
            description
          }
          blocks {
            ... on Content {
              blockType
              title
              headingHierarchy
              text {
                html
              }
            }
            ... on Code {
              blockType
              title
              codeLanguage
              code {
                html
              }
            }
            ... on Image {
              blockType
              imageType
              title
              description
              headingHierarchy
              images {
                url
                width
                height
              }
            }
            ... on Quote {
              blockType
              quoteType
              content {
                html
              }
            }
            ... on Reference {
              blockType
            }
            ... on Separator {
              blockType
              separatorType
            }
          }
          oldContent {
            raw
          }
          relatedPosts {
            title
            slug
            tag
            excerpt
            featured
            coverImage {
              url
              width
              height
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

    // const { post } = await useFetchQL(
    //   endpointURL,
    //   { query: requestQL, variables: { slug } },
    //   {
    //     revalidate: 180,
    //     headers: HeaderOption,
    //   },
    // )

    const post = MockPost

    return { status: FETCH.SUCCESS, post }
  } catch (error) {
    return { status: FETCH.ERROR, error }
  }
}
