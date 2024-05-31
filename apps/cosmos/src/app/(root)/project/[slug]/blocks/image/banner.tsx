import { ImageBlockProps } from './image.common'
import Image from 'next/image'

export const BannerImage: React.FC<ImageBlockProps & { isLogo?: boolean }> = ({
  image,
  isLogo,
}) => {
  if (isLogo) {
    return (
      <div
        className='relative flex h-32 w-full items-center justify-center md:h-48 lg:h-60'
        style={{ backgroundColor: image.fillColor?.hex }}
      >
        <div className='w-2/5'>
          <Image
            src={image.images[0].url}
            alt={image.title || 'project banner image'}
            width={image.images[0].width}
            height={image.images[0].height}
            placeholder='blur'
            blurDataURL={
              'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
            }
          />
        </div>
      </div>
    )
  } else {
    return (
      <div className='relative h-32 w-full md:h-48 lg:h-60'>
        <Image
          src={image.images[0].url}
          alt={image.title || 'project banner image'}
          layout='fill'
          objectFit='cover'
          placeholder='blur'
          blurDataURL={
            'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
          }
        />
      </div>
    )
  }
}
