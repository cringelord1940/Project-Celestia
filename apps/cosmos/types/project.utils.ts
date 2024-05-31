import type { Project } from './project'
import { FETCH } from '@/enums'

export type GetProjectResult =
  | {
      status: FETCH.SUCCESS
      project: Project
    }
  | {
      status: FETCH.ERROR
      error: any
    }

export type GetProject = (
  slug: string,
  isPreview?: boolean,
) => Promise<GetProjectResult>
