import clsx from 'clsx'

export const User = ({ className }: { className?: string }) => {
  return (
    <>
      <svg
        viewBox='0 0 13.091 16.369'
        className={clsx('h-full w-full fill-inherit', className)}
      >
        <path
          d='M0,2.783c0,2.227,3,2.8,6.545,2.8,3.53,0,6.545-.556,6.545-2.783S10.1,0,6.545,0C3.015,0,0,.557,0,2.783Z'
          transform='translate(0 10.783)'
        />
        <path
          d='M8.663,4.331A4.331,4.331,0,1,0,4.331,8.663,4.316,4.316,0,0,0,8.663,4.331Z'
          transform='translate(2.214)'
          opacity='0.4'
        />
      </svg>
    </>
  )
}
