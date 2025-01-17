import Image from 'next/legacy/image'

const Banner = ({ bannerData, color }: { bannerData: any; color: string }) => {
  if (bannerData.IsLogo) {
    return (
      <div
        className='relative flex h-32 w-full items-center justify-center md:h-48 lg:h-60'
        style={{ backgroundColor: color }}
      >
        <div style={{ width: '40%' }}>
          <Image
            src={bannerData.Image}
            alt={bannerData.Title}
            width={bannerData.width}
            height={bannerData.height}
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
          src={bannerData.Image}
          alt={bannerData.Title}
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

export { Banner }
