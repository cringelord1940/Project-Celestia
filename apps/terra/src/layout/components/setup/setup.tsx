'use client'

import { useEffect } from 'react'
import { UI } from '@global/store'
import { theme } from '@global/config'
import { GlobalStyles } from '@nexel/nextjs/views/theme/global.css'
import Console from './console'

const Theme = () => {
  const _setDark = UI((state) => state.setDark)
  const _dark = UI((state) => state.dark)

  useEffect(() => {
    console.log(Console)
  }, [])

  useEffect(() => {
    function InitState() {
      if (
        !('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        _setDark(true)
      } else {
        _setDark(false)
      }
    }
    InitState()
  }, [_setDark])

  useEffect(() => {
    if (_dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [_dark])

  return <>{GlobalStyles(theme, _dark)}</>
}

export default Theme
