/* eslint-disable react-hooks/rules-of-hooks */
import { gql } from 'graphql-request'
import { useFetchQL } from '@nexel/nextjs/libs/hooks/data'
import { env } from '@env'
import { FETCH } from '../project.d'

const getAllProjects = async () => {
  try {
    const requestQL = gql`
      {
        projects_old {
          title
          slug
          featured
          tagline
          tag
          coverImage {
            url
            width
            height
          }
        }
      }
    `

    const { projects_old: projects } = await useFetchQL(
      env.GRAPHQL_PROJECT_URL,
      { query: requestQL },
      180,
    )

    return { status: FETCH.SUCCESS, projects }
  } catch (error) {
    return { status: FETCH.ERROR, error }
  }
}

export { getAllProjects }
