/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useShallow } from 'zustand/react/shallow'
import { useUiState } from '@/store'
import { FullScreenHeader } from '@components/post/header'
import { content } from '@/utils'

// import { Footer } from '@global/layout/components/footer'
import { SmoothScroll } from '@nexel/cosmos/animations'
import { FloatingShare } from '@components/post/func'
import type { Post } from '@types'

const Client = ({ post }: { post: Post }) => {
  const basePath = 'https://theiceji.com/post/'
  const shareMedia = post.title + '|' + post.excerpt
  const Content = content.ContentFromRaw

  const [onScroll] = useUiState(useShallow((st) => [st.onScroll]))

  return (
    <>
      <FloatingShare
        slug={post.slug}
        basePath={basePath}
        shareMedia={shareMedia}
      />
      <SmoothScroll onScroll={onScroll}>
        <FullScreenHeader
          Title={post.title}
          Img={post.coverImage.url}
          Tags={post.tag}
          lang='th'
        />
        <div className='flex w-dvw'>
          <div className='container px-4 py-48 xl:w-[1024px]'>
            <Content raw={post.content.raw.children} />
          </div>
        </div>
        {/* <Footer /> */}
      </SmoothScroll>
    </>
  )
}

export default Client
