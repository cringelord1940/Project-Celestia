import { ImageBlockProps } from './image.common'
import Image from 'next/image'

export const Gallery4Images: React.FC<ImageBlockProps> = ({ image }) => {
  return (
    <div className='mb-24 grid grid-cols-1 gap-4 md:grid-cols-2'>
      {image.images.map((v: any, i: number) => (
        <div
          className='Anim relative h-64 overflow-hidden rounded-md lg:h-80 xl:hover:scale-95'
          key={i}
        >
          <Image
            className='Anim AnimScale-sm'
            src={v.url}
            alt={`${image.title || 'project banner image'}_${i}`}
            // width={v.width}
            // height={v.height}
            layout='fill'
            objectFit='cover'
            quality={100}
            placeholder='blur'
            blurDataURL={
              'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
            }
          />
        </div>
      ))}
    </div>
  )
}
