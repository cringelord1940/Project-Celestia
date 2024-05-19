// import { getServerSession } from 'next-auth'
import { getProviders } from 'next-auth/react'
// import { authOptions } from '@backend/auth'
import { RootLayout } from '@/layouts'

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const providers = await getProviders()
  // const session = await getServerSession(authOptions)
  return (
    <>
      <RootLayout session={null} providers={providers}>
        {children}
      </RootLayout>
    </>
  )
}
