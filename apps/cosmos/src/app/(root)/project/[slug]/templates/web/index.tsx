'use client'

import type { Project } from '@types'
import { DataTransform } from '../../data.transform'
import {
  InfoGrid,
  ContentBlock,
  Banner,
  MockupGallery,
  Color,
} from '@components/post/sections'
import { RelatedProjects } from '@components/post/related'

const WebProjectTemplate = ({ project }: { project: Project }) => {
  const Data = DataTransform(project)

  return (
    <>
      <div className='container px-4 py-24 xl:w-[1024px]'>
        <InfoGrid infoData={Data.Info} />
        {project.introduction && (
          <ContentBlock contentBlockData={Data.Introduction} />
        )}
        <Banner bannerData={Data.Banner} color={project.colorIdentity.hex} />
        {project.about && <ContentBlock contentBlockData={Data.About} />}
        <MockupGallery mockupGalleryData={project.gallery} />
        {project.identities && (
          <ContentBlock contentBlockData={Data.Identities} />
        )}
        <Color colorData={project.color} />
        {project.conclusion && (
          <ContentBlock contentBlockData={Data.Conclusion} />
        )}
        <RelatedProjects projects={project.relatedProject} />
      </div>
    </>
  )
}

export { WebProjectTemplate }
