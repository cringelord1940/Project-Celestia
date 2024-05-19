import clsx from 'clsx'

const Box = ({ className }: { className?: string }) => {
  return (
    <>
      <svg
        viewBox='0 0 20 22'
        className={clsx('h-full w-full fill-inherit', className)}
      >
        <path
          opacity='0.4'
          d='M19.4951 6.64717L19.5189 6.853L19.5265 7.06317V14.9368C19.5265 15.836 19.0802 16.6756 18.3359 17.1793L18.1734 17.2823L11.3538 21.2191L11.2195 21.2917L11.083 21.3567V11.6175L19.4951 6.64717Z'
        />
        <path d='M11.3542 0.780912L18.1727 4.71775C18.2268 4.75025 18.281 4.78275 18.333 4.81741L9.99999 9.74116L1.66699 4.81741C1.71899 4.78275 1.77316 4.74916 1.82733 4.71775L8.64582 0.780912C9.48432 0.296662 10.5157 0.296662 11.3542 0.780912Z' />
        <path
          opacity='0.4'
          d='M0.505049 6.64717L8.91713 11.6186V21.3556C8.82397 21.3155 8.73405 21.27 8.6463 21.2191L1.8278 17.2823C0.990383 16.798 0.473633 15.9043 0.473633 14.9368V7.06317C0.473633 6.92234 0.484466 6.78367 0.506133 6.64717H0.505049Z'
        />
      </svg>
    </>
  )
}

export { Box }
