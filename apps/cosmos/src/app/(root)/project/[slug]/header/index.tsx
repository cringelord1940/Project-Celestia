'use client'

import { PROJECT } from '@/enums'
import { FullHeader } from './header.full'

interface HeaderProps {
  title: string
  tag: string[]
  header: {
    selectHeaderType: `${PROJECT.HEADER}`
    headerGallery: {
      url: string
      height: number
      width: number
      mimeType?: string
    }[]
  }
}

export const Header: React.FC<HeaderProps> = ({ header, title, tag }) => {
  switch (header.selectHeaderType) {
    case PROJECT.HEADER.FULL:
      return (
        <FullHeader
          title={title}
          headerImage={header.headerGallery[0]}
          tag={tag}
          lang='th'
        />
      )

    default:
      return null
  }
}
