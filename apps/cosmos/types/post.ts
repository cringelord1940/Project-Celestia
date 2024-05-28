import type { Content } from './content'

export type Post = {
  title: string
  tag: string[]
  slug: string
  featured: boolean
  excerpt: string
  coverImage: {
    url: string
    width: number
    height: number
  }
  date: string
  content: {
    raw: { children: Content[] }
  }
  relatedContent: {
    title: string
    slug: string
    tag: string[]
    coverImage: {
      url: string
      width: number
      height: number
    }
  }[]
}
