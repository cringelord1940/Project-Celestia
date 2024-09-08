import type { ProjectInfo } from '@types'
import Link from 'next/link'

type InfoItem = {
  title: string
  data: { description: string; url: string | null }
}

const InlineGridInfo = ({ projectInfo }: { projectInfo: ProjectInfo }) => {
  const infoData = [
    { title: 'Client', description: projectInfo.client },
    { title: 'Industry', description: projectInfo.industry },
    { title: 'Date', description: projectInfo.date },
    { title: 'Services', description: projectInfo.services },
  ]
  return (
    <div className='_project-info-inlineGrid container'>
      {projectInfo.client && (
        <InfoItem
          title='Client'
          data={{ description: projectInfo.client, url: projectInfo.clientUrl }}
        />
      )}
    </div>
  )
}

const InfoItem = ({ title, data: { description, url } }: InfoItem) => {
  if (url) {
    return (
      <>
        <div className='Anim-1 AnimTranslate-4 backdrop-blur-md'>
          <h4>{title} :</h4>
          <Link href={url}>{description}</Link>
        </div>
      </>
    )
  }
  return (
    <>
      <div className='Anim-1 AnimTranslate-4 backdrop-blur-md'>
        <h4>{title} :</h4>
        <p>{description}</p>
      </div>
    </>
  )
}

export { InlineGridInfo }
