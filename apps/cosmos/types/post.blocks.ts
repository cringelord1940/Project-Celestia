import { POST } from '@/enums'
import type { Raw } from './content'

export type RichText = {
  html?: string
  raw?: Raw
}

export type ContentBlock = {
  blockType: `${POST.BLOCK_TYPE.CONTENT}`
  title: string | null
  headingHierarchy: `${POST.HEADING_HIERARCHY}`
  text: RichText[]
}

export type ImageBlock = {
  blockType: `${POST.BLOCK_TYPE.IMAGE}`
  title: string | null
  description: string | null
  headingHierarchy: `${POST.HEADING_HIERARCHY}`
  imageType: `${POST.IMAGE}`
  images: {
    url: string
    width: number
    height: number
    mimeType?: string
  }[]
}

export type QuoteBlock = {
  blockType: `${POST.BLOCK_TYPE.QUOTE}`
  quoteType: `${POST.QUOTE}`
  content: RichText
}

export type CodeBlock = {
  blockType: `${POST.BLOCK_TYPE.CODE}`
  title: string | null
  codeLanguage: `${POST.CODE_LANGUAGE}`
  code: RichText
}

export type SeparatorBlock = {
  blockType: `${POST.BLOCK_TYPE.SEPARATOR}`
  separatorType: `${POST.SEPARATOR}`
}

export type ReferenceBlock = {
  blockType: `${POST.BLOCK_TYPE.REFERENCE}`
}

export type Block =
  | ContentBlock
  | ImageBlock
  | QuoteBlock
  | CodeBlock
  | SeparatorBlock
  | ReferenceBlock
