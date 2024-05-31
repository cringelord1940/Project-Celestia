'use client'

import { useShallow } from 'zustand/react/shallow'
import { SmoothScroll } from '@nexel/cosmos/animations'
import { useUiState } from '@/store'
import { FloatingShare } from '@components/utils'

interface PostLayoutProps {
  children: React.ReactNode
  title: string
  excerpt: string | null
  slug: string
}

export const Layout: React.FC<PostLayoutProps> = ({
  children,
  title,
  slug,
  excerpt,
}) => {
  const basePath = 'https://theiceji.com/post/'
  const shareMedia = title + '|' + excerpt

  const [onScroll] = useUiState(useShallow((st) => [st.onScroll]))

  return (
    <>
      <FloatingShare
        slug={slug}
        basePath={basePath}
        shareMedia={shareMedia}
      />
      <SmoothScroll onScroll={onScroll}>{children}</SmoothScroll>
    </>
  )
}
