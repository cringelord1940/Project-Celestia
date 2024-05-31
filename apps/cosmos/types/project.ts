import type { Block } from './project.blocks'
import { PROJECT } from '@/enums'
export * as ProjectBlock from './project.blocks'
export * from './project.utils'

export type ProjectInfo = {
  infoType: `${PROJECT.INFO}`
  services: string
  industry: string
  date: string
  client: string
}

export type RelatedProject = {
  title: string
  tagline: string
  tag: string[]
  slug: string
  coverImage: {
    url: string
    width: number
    height: number
    mimeType?: string
  }
}

export type Project = {
  title: string
  slug: string
  id: string
  tagline: string
  excerpt: string
  featured: boolean
  tag: string[]
  website: string | null
  updatedAt: string
  projectType: `${PROJECT.TYPE}`
  projectCategory: {
    title: string
    slug: string
  }[]
  coverImage: {
    url: string
    width: number
    height: number
    mimeType?: string
  }
  colorIdentity: {
    hex: string
    rgba?: {
      g: number
      b: number
      r: number
    }
  }
  header: {
    selectHeaderType: `${PROJECT.HEADER}`
    headerGallery: {
      url: string
      height: number
      width: number
      mimeType?: string
    }[]
  }
  projectInfo: ProjectInfo
  blocks: Block[]
  relatedProjects: RelatedProject[]
}
