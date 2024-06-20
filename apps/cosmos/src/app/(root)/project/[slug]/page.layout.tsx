'use client'

import { useShallow } from 'zustand/react/shallow'
import { SmoothScroll, OnScrollFunctionProps } from '@nexel/cosmos/animations'
import { useUiState, NAV_DYN_TYPE, DynamicNavShareSocial } from '@/store'

interface ProjectLayoutProps {
  children: React.ReactNode
  title: string
  tagline: string | null
  slug: string
  coverImage: { url: string; width: number; height: number }
}

export const Layout: React.FC<ProjectLayoutProps> = ({
  children,
  title,
  slug,
  tagline,
  coverImage,
}) => {
  const basePath = 'https://theiceji.com/project/'
  const shareMedia = title + '|' + tagline

  const [setDynamicNav] = useUiState(useShallow((st) => [st.setDynamicNav]))
  const onScroll = (state: OnScrollFunctionProps) => {
    setDynamicNav([
      { type: NAV_DYN_TYPE.PROGRESS, ...state },
      { type: NAV_DYN_TYPE.BACK, href: '/project' },
      {
        type: NAV_DYN_TYPE.SHARE,
        title: shareMedia,
        url: basePath + slug,
        img: coverImage.url,
        social: [
          DynamicNavShareSocial.facebook,
          DynamicNavShareSocial.twitter,
          DynamicNavShareSocial.pinterest,
          DynamicNavShareSocial.line,
          DynamicNavShareSocial.weibo,
        ],
      },
    ])
  }

  return (
    <>
      <SmoothScroll onScroll={onScroll}>{children}</SmoothScroll>
    </>
  )
}
