import type { Post } from './post'
import { FETCH } from '@/enums'

export type GetPostResult =
  | {
      status: FETCH.SUCCESS
      post: Post
    }
  | {
      status: FETCH.ERROR
      error: any
    }

export type GetPost = (
  slug: string,
  isPreview?: boolean,
) => Promise<GetPostResult>
