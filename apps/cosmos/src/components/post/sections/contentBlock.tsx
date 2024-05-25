import { useRef, useLayoutEffect } from 'react'

const ContentBlock = ({ contentBlockData }: { contentBlockData: any }) => {
  const $ref = useRef<HTMLDivElement | null>(null)
  useLayoutEffect(() => {
    if ($ref.current) {
      const ref = $ref.current
      contentBlockData.Introduction.content[0] &&
        (ref.innerHTML = contentBlockData.Introduction.content[0].html)
    }
  }, [$ref, contentBlockData.Introduction.content[0].html])

  return (
    <div className='flex flex-col justify-between py-48 md:flex-row'>
      <h2 className='text-base font-semibold uppercase'>
        <span className='text-quaternary-2 dark:text-primary-0 pr-2 text-xs'>
          /{contentBlockData.number}
        </span>
        {contentBlockData.title}
      </h2>
      <div
        className='Project-header mt-4 md:-mt-2 md:w-9/12 lg:w-3/5'
        ref={$ref}
      >
        {contentBlockData.Introduction.content[0].html}
      </div>
    </div>
  )
}

export { ContentBlock }
