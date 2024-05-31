import { ImageBlockProps } from './image.common'
import Image from 'next/image'

export const OneImage: React.FC<ImageBlockProps> = ({ image }) => {
  return (
    <div className='mb-24'>
      <div className='Anim relative h-64 overflow-hidden rounded-md lg:h-80 xl:hover:scale-95'>
        <Image
          className='Anim AnimScale-sm'
          src={image.images[0].url}
          // width={v.width}
          // height={v.height}
          alt={image.title || 'project banner image'}
          layout='fill'
          objectFit='cover'
          quality={100}
          placeholder='blur'
          blurDataURL={
            'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
          }
        />
      </div>
    </div>
  )
}
