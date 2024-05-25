/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { FaFacebookF, FaGoogle, FaGithub } from 'react-icons/fa6'
import { signIn } from 'next-auth/react'

const SignInProviders = ({ providers, session }: any) => {
  const router = useRouter()

  useEffect(() => {
    session && router.push('/app/profile')
  }, [session, router])

  return (
    <>
      <div className='flex h-8 justify-center'>
        <div
          className=' cursor-pointer rounded-full bg-blue-500 px-2 py-1 text-white'
          onClick={() => signIn(providers.facebook.id)}
        >
          <FaFacebookF size='xs' className='w-4' />
        </div>
        <div
          className='ml-3 cursor-pointer rounded-full bg-red-500 px-2 py-1 text-white'
          onClick={() => signIn(providers.google.id)}
        >
          <FaGoogle size='xs' className='w-4' />
        </div>
        <div
          className='ml-3 cursor-pointer rounded-full bg-slate-800 px-2 py-1 text-white'
          onClick={() => signIn(providers.github.id)}
        >
          <FaGithub size='xs' className='w-4' />
        </div>
      </div>
    </>
  )
}

export { SignInProviders }
