import { CreateProgress } from '@nexel/nextjs/views/module.nprogress'
import { theme } from '@global/config'

import { Providers } from './providers'
import { Audio, Setup /*, SetPageState */ } from './components/setup'
import { SetPageState } from './components/setup'

// IJN Components
import Cursor from './components/cursor'
import { NavBar, NavCanvas /* NavMobile */ } from './components/nav'
import { Footer } from './components/footer'
import AppInfo from './components/appInfo'

const Wrapper = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Providers>
        <CreateProgress color={theme.color.primary[0]} />
        <SetPageState />
        <AppInfo />
        <Setup />
        <NavBar />
        <NavCanvas />
        {children}
        <Footer />
        <Cursor />
        <Audio />
      </Providers>
    </>
  )
}

export default Wrapper
