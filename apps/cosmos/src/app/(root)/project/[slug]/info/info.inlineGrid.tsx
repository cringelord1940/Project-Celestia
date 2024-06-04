import type { ProjectInfo } from '@types'

const InlineGridInfo = ({ projectInfo }: { projectInfo: ProjectInfo }) => {
  const infoData = [
    { title: 'Client', description: projectInfo.client },
    { title: 'Industry', description: projectInfo.industry },
    { title: 'Date', description: projectInfo.date },
    { title: 'Services', description: projectInfo.services },
  ]

  console.log(infoData[2])
  return (
    <div className='_project-info-inlineGrid container'>
      {infoData.map((v: any, i: number) => (
        <div key={i} className='Anim-1 AnimTranslate-4 backdrop-blur-md'>
          <h4>{v.title} :</h4>
          <p>{v.description}</p>
        </div>
      ))}
    </div>
  )
}

export { InlineGridInfo }
