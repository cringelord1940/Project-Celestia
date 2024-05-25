/* eslint-disable @typescript-eslint/no-explicit-any */
import { Content, ImageContent, TextContent } from '@types'
import Image from 'next/image'
import clsx from 'clsx'
import { CONTENT_BLOCK } from '@/enums'

const ObjectText = ({ content }: { content: TextContent[] }) => {
  return (
    <>
      {content.map(({ text, bold }, i: number) => {
        return bold ? (
          <strong
            key={i}
            className='text-quaternary-2 dark:text-primary-0 px-0.5 font-semibold'
          >
            {text}
          </strong>
        ) : (
          text
        )
      })}
    </>
  )
}

interface BlockComponent {
  content: Partial<{
    type: string
    className: string
    children: TextContent[] | ImageContent[] | Content[]
    src: string
    altText: string
    height: number
    width: number
    handle: string
    mimeType: string
  }>
}

type BlockComponentsType = {
  [Key in CONTENT_BLOCK]: React.FC<BlockComponent>
}

const BlockComponents: BlockComponentsType = {
  paragraph: ({ content }) => (
    <p className='py-2 text-[#5c5c5c] dark:text-[#bbbbbb]'>
      &emsp;&emsp;&emsp;
      <ObjectText content={content.children as TextContent[]} />
    </p>
  ),
  'heading-one': ({ content }) => (
    <h1 className='pb-4 pt-16 text-3xl font-semibold lg:pt-24 lg:text-5xl'>
      <ObjectText content={content.children as TextContent[]} />
    </h1>
  ),
  'heading-two': ({ content }) => (
    <h2 className='pb-4 pt-16 text-2xl font-semibold lg:pt-24 lg:text-4xl'>
      <ObjectText content={content.children as TextContent[]} />
    </h2>
  ),
  'heading-three': ({ content }) => (
    <h3 className='text-1xl pb-4 pt-16 font-semibold lg:pt-24 lg:text-3xl'>
      <ObjectText content={content.children as TextContent[]} />
    </h3>
  ),
  'heading-four': ({ content }) => (
    <h4 className='py-4 pl-4 text-lg font-semibold lg:py-8 lg:pl-8 lg:text-xl'>
      <ObjectText content={content.children as TextContent[]} />
    </h4>
  ),
  'heading-five': ({ content }) => (
    <h5 className='py-8 pl-8 font-semibold lg:text-lg'>
      <ObjectText content={content.children as TextContent[]} />
    </h5>
  ),
  'heading-six': ({ content }) => (
    <h6 className='py-8 pl-6 text-xl font-light italic lg:py-16 lg:pl-12 lg:text-3xl lg:leading-10'>
      <ObjectText content={content.children as TextContent[]} />
    </h6>
  ),
  image: ({ content }) =>
    content.src &&
    content.altText && (
      <div className='flex w-full justify-center py-8'>
        <Image
          className='overflow-hidden rounded-lg'
          src={content.src}
          alt={content.altText}
          height={content.height}
          width={content.width}
          // fill
          objectFit='cover'
          placeholder='blur'
          blurDataURL={
            'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
          }
        />
      </div>
    ),
  class: ({ content }) => (
    <div className={clsx(content.className)}>
      <RawMap raw={content.children as any} />
    </div>
  ),
  'block-quote': ({ content }) => (
    <blockquote
      className='border-l-quaternary-2 dark:border-l-primary-0 my-6 rounded-md border-4 border-y-white/0 border-r-white/0
      bg-black/5 p-6 text-xl font-light dark:bg-black/40 lg:my-12 lg:text-2xl lg:leading-10'
    >
      <ObjectText content={content.children as TextContent[]} />
    </blockquote>
  ),
}

const RawMap = ({ raw }: { raw: Content[] }) => {
  return (
    <>
      {raw.map((content, index) => {
        const Component = BlockComponents[content.type as CONTENT_BLOCK]
        return Component ? <Component key={index} content={content} /> : null
      })}
    </>
  )
}

export { RawMap, ObjectText }
