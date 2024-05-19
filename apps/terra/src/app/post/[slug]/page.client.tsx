/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { State } from '@global/store'
import { FullScreenHeader } from '@components/post/header'
import { RawMap } from '@components/post/utils'

// import { Footer } from '@global/layout/components/footer'
import { useScrollState } from '@nexel/cosmos/animations/hooks'
import { SmoothScroll } from '@nexel/cosmos/animations'
import { SetPage } from '@global/func/state'
import { FloatingShare } from '@components/post/func'
import type { tPost } from '../post'

const Client = ({ post }: { post: tPost }) => {
  const basePath = 'https://theiceji.com/post/'
  const shareMedia = post.title + '|' + post.excerpt

  const _setNavRouteActiveState = State((state) => state.setNavRouteActiveState)
  const { handleScroll } = useScrollState(_setNavRouteActiveState, 2)

  return (
    <>
      <SetPage
        title={
          post.title.length >= 8
            ? 'Post | ' + post.title.slice(0, 8) + '..'
            : 'Post | ' + post.title
        }
      />
      <FloatingShare
        slug={post.slug}
        basePath={basePath}
        shareMedia={shareMedia}
      />
      <SmoothScroll Callback={handleScroll}>
        <FullScreenHeader
          Title={post.title}
          Img={post.coverImage.url}
          Tags={post.tag}
          lang='th'
        />
        <div className='flex w-dvw'>
          <div className='container px-4 py-48 xl:w-[1024px]'>
            <RawMap RAW={post.content.raw.children} />
          </div>
        </div>
        {/* <Footer /> */}
      </SmoothScroll>
    </>
  )
}

export default Client
