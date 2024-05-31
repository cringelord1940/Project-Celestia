'use client'

import { useShallow } from 'zustand/react/shallow'
import { SmoothScroll } from '@nexel/cosmos/animations'
import { useUiState } from '@/store'
import { FloatingShare } from '@components/utils'

interface ProjectLayoutProps {
  children: React.ReactNode
  title: string
  tagline: string | null
  slug: string
}

export const Layout: React.FC<ProjectLayoutProps> = ({
  children,
  title,
  slug,
  tagline,
}) => {
  const basePath = 'https://theiceji.com/project/'
  const shareMedia = title + '|' + tagline

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
