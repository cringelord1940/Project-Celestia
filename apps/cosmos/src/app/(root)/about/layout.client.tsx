'use client'

export default function SceneLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* <div className='relative flex h-svh w-svw overflow-hidden'>
        <div className='absolute z-10 flex h-full w-full'>{children}</div>
      </div> */}
      {children}
    </>
  )
}
