/* eslint-disable react-hooks/rules-of-hooks */
import { gql } from 'graphql-request'
import { useFetchQL } from '@nexel/nextjs/libs/hooks/data'
import { env } from '@env'
import { FETCH } from '@/enums'

export const getPosts = async () => {
  const endpointURL = env.GRAPHQL_POST_URL
  try {
    const requestQL = gql`
      {
        posts {
          slug
          title
          excerpt
          date
          featured
          tag
          coverImage {
            height
            url
            width
          }
        }
      }
    `

    const { posts } = await useFetchQL(
      endpointURL,
      { query: requestQL },
      { revalidate: 180 },
    )

    return { status: FETCH.SUCCESS, posts }
  } catch (error) {
    return { status: FETCH.ERROR, error }
  }
}
