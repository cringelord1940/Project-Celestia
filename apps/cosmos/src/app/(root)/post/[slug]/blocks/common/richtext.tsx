import type { PostBlock } from '@types'
import { sanitize } from 'isomorphic-dompurify'
// import { HTMLFromRaw } from '@/utils/content'

export const Richtext = ({ richtext }: { richtext: PostBlock.RichText }) => {
  if (!richtext.html) return <p>undefinded</p>
  // if (richtext.raw) {
  //   return <HTMLFromRaw raw={richtext.raw.children} />
  // }
  const sanitizedHtml = sanitize(richtext.html)
  return (
    <>
      <div
        className='_post-content-text py-2 text-foreground/80'
        dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
      />
    </>
  )
}
