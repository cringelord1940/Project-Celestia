import type { RelatedProject } from '@types'
import Image from 'next/image'
import Link from 'next/link'

const RelatedProjects = ({ projects }: { projects: RelatedProject[] }) => {
  return (
    <>
      <div className='container pb-48 pt-16'>
        <h6 className='mb-14 font-semibold'>Related Projects</h6>
        {projects &&
          projects.map((project, i: number) => (
            <Link href={project.slug} key={i} passHref>
              <div className='Anim AnimTranslate-10 AnimSaturate-0 relative -mt-12 h-48 cursor-pointer overflow-hidden rounded-md drop-shadow-[-12px_-12px_25px_rgba(0,0,0,0.2)] dark:drop-shadow-[-12px_-12px_25px_rgba(0,0,0,0.7)]'>
                <div className='absolute left-4 top-4 z-10'>
                  <h5 className='text-2xl font-bold text-white'>
                    {project.title}
                  </h5>
                  <div>
                    {project.tag?.map((v: string, i: number) => (
                      <button
                        className='Anim AnimTranslate-4 hover:bg-quaternary-2 dark:hover:bg-primary-0 mr-2 rounded border border-white/40 bg-white/20
                      px-2 py-1 text-xs uppercase text-white backdrop-blur-md hover:text-white dark:hover:text-black'
                        key={i}
                      >
                        {v}
                      </button>
                    ))}
                  </div>
                </div>
                <Image
                  alt={project.title}
                  src={project.coverImage.url}
                  layout='fill'
                  objectFit='cover'
                  placeholder='blur'
                  blurDataURL={
                    'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
                  }
                />
              </div>
            </Link>
          ))}
      </div>
    </>
  )
}

export { RelatedProjects }
