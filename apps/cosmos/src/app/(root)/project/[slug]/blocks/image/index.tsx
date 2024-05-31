import { ImageBlockProps } from './image.common'
import { ImageBlockLayout } from './image.layout'
import { ImageBlockSwitcher } from './image'

export const ImageBlock: React.FC<ImageBlockProps> = ({ image }) => {
  return (
    <>
      <ImageBlockLayout title={image.title} description={image.description}>
        <ImageBlockSwitcher image={image} />
      </ImageBlockLayout>
    </>
  )
}
