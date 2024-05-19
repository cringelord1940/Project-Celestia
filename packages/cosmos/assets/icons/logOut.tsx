import clsx from 'clsx'

const LogOut = ({ className }: { className?: string }) => {
  return (
    <>
      <svg
        viewBox='0 0 20 20'
        className={clsx('h-full w-full fill-inherit', className)}
      >
        <g opacity='0.4'>
          <path d='M4.52453 0H9.48564C11.9748 0 14 1.99 14 4.437V15.553C14 18.005 11.9698 20 9.47445 20H4.51537C2.02515 20 0 18.01 0 15.563V14.623V4.447C0 1.996 2.03024 0 4.52453 0Z' />
        </g>
        <g>
          <path d='M16.9334 6.5458C16.6393 6.2458 16.166 6.2458 15.8728 6.5478C15.5807 6.8498 15.5816 7.3368 15.8748 7.6368L17.434 9.2298H15.9391H7.54875C7.13483 9.2298 6.79883 9.5748 6.79883 9.9998C6.79883 10.4258 7.13483 10.7698 7.54875 10.7698H17.434L15.8748 12.3628C15.5816 12.6628 15.5807 13.1498 15.8728 13.4518C16.0199 13.6028 16.2118 13.6788 16.4046 13.6788C16.5955 13.6788 16.7873 13.6028 16.9334 13.4538L19.7792 10.5458C19.9204 10.4008 20.0003 10.2048 20.0003 9.9998C20.0003 9.7958 19.9204 9.5998 19.7792 9.4548L16.9334 6.5458Z' />
        </g>
      </svg>
    </>
  )
}

export { LogOut }