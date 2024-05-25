import clsx from 'clsx'

const Login = ({ className }: { className?: string }) => {
  return (
    <>
      <svg
        viewBox='0 0 20 20'
        className={clsx('h-full w-full fill-inherit', className)}
      >
        <g opacity='0.4'>
          <path d='M9.88733 0H14.9196C17.4451 0 19.4997 1.99 19.4997 4.436V15.552C19.4997 18.004 17.4409 20 14.9093 20H9.87701C7.35156 20 5.2959 18.009 5.2959 15.562V14.622V4.446C5.2959 1.995 7.35569 0 9.88733 0Z' />
        </g>
        <path d='M11.0695 6.54482C10.7627 6.24482 10.2691 6.24482 9.96338 6.54682C9.65867 6.84882 9.65968 7.33582 9.96541 7.63582L11.5905 9.22882H1.2821C0.85042 9.22882 0.5 9.57382 0.5 9.99982C0.5 10.4248 0.85042 10.7688 1.2821 10.7688H11.5905L9.96541 12.3628C9.65968 12.6628 9.65867 13.1498 9.96338 13.4518C10.1168 13.6028 10.3168 13.6788 10.518 13.6788C10.717 13.6788 10.9171 13.6028 11.0695 13.4538L14.0374 10.5448C14.1847 10.3998 14.268 10.2038 14.268 9.99982C14.268 9.79482 14.1847 9.59882 14.0374 9.45382L11.0695 6.54482Z' />
      </svg>
    </>
  )
}

export { Login }
