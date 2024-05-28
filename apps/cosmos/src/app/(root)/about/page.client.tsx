'use client'

import { useState } from 'react'
import { useUiState } from '@/store'
import { FreeTimeItems } from '@/contents/pages/about'
import { about } from './components'
import { useShallow } from 'zustand/react/shallow'

const Client = () => {
  const _dark = useUiState(useShallow((state) => state.dark))
  const [Page, setPage] = useState(0)

  const { Hero, CTA, Facts, FreeTime, Nav } = about

  const InPageRoute = [
    'About | Introduction',
    'About | Facts of me',
    'About | My hobbies',
    'About | More',
  ]

  return (
    <>
      {Page === 2 && <FreeTime data={FreeTimeItems} />}
      {!(Page === 2) && (
        <div className='xxl:w-[1440px] mx-auto h-full w-screen items-start overflow-hidden px-4 sm:container sm:px-0'>
          {Page === 0 && <Hero />}
          {Page === 1 && <Facts _dark={_dark} />}
          {Page === 3 && <CTA _dark={_dark} />}
        </div>
      )}
      <Nav Page={Page} setPage={setPage} />
    </>
  )
}

export default Client
