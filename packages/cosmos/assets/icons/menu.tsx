import clsx from 'clsx'

const Menu = ({ className }: { className?: string }) => {
  return (
    <>
      <svg
        viewBox='0 0 16.185 16'
        className={clsx('h-full w-full fill-inherit', className)}
      >
        <g transform='translate(-0.185)'>
          <path
            d='M4.849,0A2.086,2.086,0,0,1,6.927,2.1V4.89a2.086,2.086,0,0,1-2.078,2.1H2.078A2.086,2.086,0,0,1,0,4.89V2.1A2.086,2.086,0,0,1,2.078,0Z'
            transform='translate(9.443)'
            opacity='0.4'
          />
          <path
            d='M4.74,0A2.039,2.039,0,0,1,6.77,2.048V4.78A2.039,2.039,0,0,1,4.74,6.828H2.031A2.039,2.039,0,0,1,0,4.78V2.048A2.039,2.039,0,0,1,2.031,0Z'
            transform='translate(0.185)'
          />
          <path
            d='M4.74,0A2.039,2.039,0,0,1,6.77,2.048V4.78A2.04,2.04,0,0,1,4.74,6.828H2.031A2.04,2.04,0,0,1,0,4.78V2.048A2.039,2.039,0,0,1,2.031,0Z'
            transform='translate(0.185 9.172)'
          />
          <path
            d='M4.74,0A2.039,2.039,0,0,1,6.77,2.048V4.78A2.04,2.04,0,0,1,4.74,6.828H2.031A2.04,2.04,0,0,1,0,4.78V2.048A2.039,2.039,0,0,1,2.031,0Z'
            transform='translate(9.414 9.172)'
          />
        </g>
      </svg>
    </>
  )
}

export { Menu }
