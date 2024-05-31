import type { ProjectInfo } from '@types'

const InlineGridInfo = ({ projectInfo }: { projectInfo: ProjectInfo }) => {
  const infoData = [
    { title: 'Client', description: projectInfo.client },
    { title: 'Industry', description: projectInfo.industry },
    { title: 'Date', description: projectInfo.date },
    { title: 'Services', description: projectInfo.services },
  ]
  return (
    <div className='mb-0 mt-24 grid grid-cols-2 gap-4 md:mb-24 md:mt-48 lg:grid-cols-4 lg:gap-8'>
      {infoData.map((v: any, i: number) => (
        <div
          key={i}
          className='Anim-1 AnimTranslate-4 border-quaternary-2 text-quaternary-2 hover:bg-quaternary-2 dark:border-primary-0
          dark:text-primary-0 dark:hover:bg-primary-0 rounded-md border bg-white/10 py-2 backdrop-blur-md hover:text-white dark:bg-black/30 dark:hover:text-black lg:py-4'
        >
          <h4 className='text-center text-xs font-bold sm:text-base'>
            {v.title} :
          </h4>
          <p className='text-center text-xs sm:text-base'>{v.description}</p>
        </div>
      ))}
    </div>
  )
}

export { InlineGridInfo }
