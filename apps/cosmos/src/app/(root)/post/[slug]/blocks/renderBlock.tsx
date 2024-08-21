import type { PostBlock } from '@types'
import { POST } from '@/enums'
import { ContentBlock } from './content'
import { QuoteBlock } from './quote'
import { ImageBlock } from './image'
import { CodeBlock } from './code'
import { SeparatorBlock } from './separator'

export const renderBlock = (block: PostBlock.Block, isPreview: boolean) => {
  switch (block.blockType) {
    case POST.BLOCK_TYPE.CONTENT:
      return <ContentBlock content={block as PostBlock.ContentBlock} />
    case POST.BLOCK_TYPE.QUOTE:
      return <QuoteBlock quote={block as PostBlock.QuoteBlock} />
    case POST.BLOCK_TYPE.IMAGE:
      return (
        <ImageBlock
          image={block as PostBlock.ImageBlock}
          isPreview={isPreview}
        />
      )
    case POST.BLOCK_TYPE.CODE:
      return <CodeBlock code={block as PostBlock.CodeBlock} />
    case POST.BLOCK_TYPE.SEPARATOR:
      return <SeparatorBlock separator={block as PostBlock.SeparatorBlock} />
    default:
      return null
  }
}
