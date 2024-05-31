import type { ProjectBlock } from '@types'
import { sanitize } from 'dompurify'

interface ContentBlockProps {
  content: ProjectBlock.ContentBlock
}

export const ContentBlock: React.FC<ContentBlockProps> = ({ content }) => {
  const sanitizedHtml = sanitize(content.content.html)
  return (
    <div className='flex flex-col justify-between py-48 md:flex-row'>
      <h2 className='text-base font-semibold uppercase'>
        <span className='text-quaternary-2 dark:text-primary-0 pr-2 text-xs'>
          /{content.number}
        </span>
        {content.title}
      </h2>
      <div
        className='Project-header mt-4 md:-mt-2 md:w-9/12 lg:w-3/5'
        dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
      />
    </div>
  )
}
