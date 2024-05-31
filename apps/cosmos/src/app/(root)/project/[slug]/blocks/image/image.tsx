import { ImageBlockProps } from './image.common'
import { PROJECT } from '@/enums'
import { BannerImage } from './banner'
import { MobileMockupImages } from './mobileMockup'
import { Gallery4Images } from './gallery4'
import { OneImage } from './oneImage'

export const ImageBlockSwitcher: React.FC<ImageBlockProps> = ({ image }) => {
  switch (image.imageType) {
    case PROJECT.IMAGE.BANNER_LOGO:
      return <BannerImage image={image} isLogo />
    case PROJECT.IMAGE.BANNER:
      return <BannerImage image={image} />
    case PROJECT.IMAGE.MOBILE_MOCKUP:
      return <MobileMockupImages image={image} />
    case PROJECT.IMAGE.GALLERY_4:
      return <Gallery4Images image={image} />
    case PROJECT.IMAGE.ONE_IMAGE:
      return <OneImage image={image} />
    default:
      return null
  }
}
