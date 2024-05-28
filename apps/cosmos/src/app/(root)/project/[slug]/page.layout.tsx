'use client'

import type { Project } from '@types'
import { useShallow } from 'zustand/react/shallow'
import { SmoothScroll } from '@nexel/cosmos/animations'
import { useUiState } from '@/store'
import { FloatingShare } from '@components/post/func'
import { FullScreenHeader } from '@components/post/header'

interface ProjectLayoutProps {
  children: React.ReactNode
  project: Project
}

export const Layout: React.FC<ProjectLayoutProps> = ({ children, project }) => {
  const basePath = 'https://theiceji.com/project/'
  const shareMedia = project.title + '|' + project.tagline

  const [onScroll] = useUiState(useShallow((st) => [st.onScroll]))

  return (
    <>
      <FloatingShare
        slug={project.slug}
        basePath={basePath}
        shareMedia={shareMedia}
      />
      <SmoothScroll onScroll={onScroll}>
        {project.headerType.selectHeaderType === 'FULL' && (
          <FullScreenHeader
            Title={project.title}
            Img={project.coverImage.url}
            Tags={project.tag}
            lang='th'
          />
        )}
        <div className='flex w-dvw bg-background'>{children}</div>
      </SmoothScroll>
    </>
  )
}
