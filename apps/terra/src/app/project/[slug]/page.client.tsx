'use client'

import { useEffect, useRef } from 'react'
// import { Footer } from '@global/layout/components/footer'
import type { tProject } from '../project'
import { useScrollState } from '@nexel/cosmos/animations/hooks'
import { SmoothScroll } from '@nexel/cosmos/animations'
import { SetPage } from '@global/func/state'
import { State } from '@global/store'
import { DataTransform } from './data.transform'
import { FloatingShare } from '@components/post/func'
import { FullScreenHeader } from '@components/post/header'
import { Grid4 } from '@components/post/info'
import {
  ContentBlock,
  Banner,
  PhotoGallery,
  MockupGallery,
  Color,
} from '@components/post/sections'
import { RelatedProjects } from '@components/post/related'

const Client = ({ project }: { project: tProject }) => {
  const basePath = 'https://theiceji.com/project/'
  const shareMedia = project.title + '|' + project.tagline

  const _setNavRouteActiveState = State((state) => state.setNavRouteActiveState)
  const { handleScroll } = useScrollState(_setNavRouteActiveState, 2)

  const Data = DataTransform(project)
  const $Introduction = useRef<HTMLDivElement | null>(null)
  const $About = useRef<HTMLDivElement | null>(null)
  const $Identities = useRef<HTMLDivElement | null>(null)
  const $Conclusion = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const IntroRef = $Introduction.current
    const AboutRef = $About.current
    const IdenRef = $Identities.current
    const ConcluRef = $Conclusion.current

    IntroRef &&
      Data.Introduction.content[0] &&
      (IntroRef.innerHTML = Data.Introduction.content[0].html)
    AboutRef &&
      Data.About.content[0] &&
      (AboutRef.innerHTML = Data.About.content[0].html)
    IdenRef &&
      Data.Identities.content[0] &&
      (IdenRef.innerHTML = Data.Identities.content[0].html)
    ConcluRef &&
      Data.Conclusion.content[0] &&
      (ConcluRef.innerHTML = Data.Conclusion.content[0].html)
  }, [Data])

  return (
    <>
      <SetPage
        title={
          project.title.length >= 8
            ? 'Project | ' + project.title.slice(0, 8) + '..'
            : 'Project | ' + project.title
        }
      />
      <FloatingShare
        slug={project.slug}
        basePath={basePath}
        shareMedia={shareMedia}
      />
      <SmoothScroll Callback={handleScroll}>
        {project.headerType.selectHeaderType === 'FULL' && (
          <FullScreenHeader
            Title={project.title}
            Img={project.coverImage.url}
            Tags={project.tag}
            lang='th'
          />
        )}
        <div className='bg-backgroundLight-1 dark:bg-background-1 flex w-dvw'>
          <div className='container px-4 py-24 xl:w-[1024px]'>
            <Grid4 infoData={Data.Info} />
            {project.introduction && (
              <ContentBlock
                contentBlockData={Data.Introduction}
                refElement={$Introduction}
              />
            )}
            <Banner
              bannerData={Data.Banner}
              color={project.colorIdentity.hex}
            />
            {project.about && (
              <ContentBlock contentBlockData={Data.About} refElement={$About} />
            )}
            {project.projectType === 'APP' && (
              <>
                <MockupGallery mockupGalleryData={project.gallery} />
                {project.identities && (
                  <ContentBlock
                    contentBlockData={Data.Identities}
                    refElement={$Identities}
                  />
                )}
                <Color colorData={project.color} />
                {project.conclusion && (
                  <ContentBlock
                    contentBlockData={Data.Conclusion}
                    refElement={$Conclusion}
                  />
                )}
              </>
            )}
            {project.projectType === 'PRODUCT' && (
              <>
                <PhotoGallery photoGalleryData={project.gallery} />
              </>
            )}
            <RelatedProjects projects={project.relatedProject} />
          </div>
        </div>
        {/* <Footer /> */}
      </SmoothScroll>
    </>
  )
}

export default Client
