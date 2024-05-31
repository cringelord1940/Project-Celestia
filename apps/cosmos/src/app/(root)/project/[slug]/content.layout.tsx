'use client'

import clsx from 'clsx'
import { CSS } from './style.css'

export const ContentLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={clsx('flex w-dvw flex-col bg-background', CSS)}>
      {children}
    </div>
  )
}
