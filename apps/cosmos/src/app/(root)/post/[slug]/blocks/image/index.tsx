import { POST } from '@/enums'
import { Heading } from '../common'
import { ImageBlockProps } from './image.common'
import { DefaultImage } from './image.default'
import { GalleryImages } from './image.gallery'

export const ImageBlock: React.FC<ImageBlockProps> = ({ image, isPreview }) => {
  return (
    <>
      <Heading title={image.title} headingHierarchy={image.headingHierarchy} />
      <ImageComponent image={image} isPreview={isPreview} />
      {image.description && <p>{image.description}</p>}
    </>
  )
}

const ImageComponent: React.FC<ImageBlockProps> = ({ image, isPreview }) => {
  switch (image.imageType) {
    case POST.IMAGE.DEFAULT:
      return <DefaultImage image={image} isPreview={isPreview} />
    case POST.IMAGE.GALLERY:
      return <GalleryImages image={image} isPreview={isPreview} />
    case POST.IMAGE.FULL_WIDTH:
      return <DefaultImage image={image} isPreview={isPreview} />
    default:
      return null
  }
}
