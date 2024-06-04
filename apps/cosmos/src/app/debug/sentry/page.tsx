'use client'

const Page = () => {
  return (
    <>
      <div className='flex h-dvh w-dvw items-center justify-center'>
        <button
          type='button'
          className='Anim border-primary-0 hover:bg-primary-0 rounded-md border px-2 py-1 hover:text-black'
          onClick={() => {
            throw new Error('Debug: Throw error from TheIceJi-COSMOS')
          }}
        >
          Throw error
        </button>
      </div>
    </>
  )
}

export default Page
