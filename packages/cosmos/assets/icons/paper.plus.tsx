import clsx from 'clsx'

const PaperPlus = ({ className }: { className?: string }) => {
  return (
    <>
      <svg
        viewBox='0 0 20 20'
        className={clsx('h-full w-full fill-inherit', className)}
      >
        <g opacity='0.4'>
          <path
            d='M14.0146 7.011C12.1987 7.011 10.7055 5.508 10.7055 3.675V0.459C10.7055 0.206 10.5026 0 10.253 0H4.96363C2.49517 0 0.5 2.026 0.5 4.509V15.284C0.5 17.889 2.59022 20 5.16958 20H13.0453C15.5058 20 17.5 17.987 17.5 15.502V7.471C17.5 7.217 17.298 7.012 17.0465 7.013C16.6247 7.016 16.1168 7.021 15.8088 7.021C15.3573 7.021 14.7592 7.011 14.0146 7.011Z'
            fill='white'
          />
        </g>
        <g opacity='0.4'>
          <path d='M12.2637 0.901309V3.53831C12.2637 4.64431 13.1747 5.55431 14.2797 5.55431C14.9777 5.56231 15.9457 5.56431 16.7677 5.56231C17.1887 5.56131 17.4027 5.05831 17.1107 4.75431C16.0557 3.65731 14.1667 1.69131 13.0847 0.567309C12.7857 0.256309 12.2637 0.470309 12.2637 0.901309Z' />
        </g>
        <path d='M9.63969 10.2363V8.50928C9.63969 8.09828 9.30669 7.76428 8.89569 7.76428C8.48469 7.76428 8.15069 8.09828 8.15069 8.50928V10.2363H6.42369C6.01269 10.2363 5.67969 10.5703 5.67969 10.9813C5.67969 11.3923 6.01269 11.7263 6.42369 11.7263H8.15069V13.4523C8.15069 13.8633 8.48469 14.1973 8.89569 14.1973C9.30669 14.1973 9.63969 13.8633 9.63969 13.4523V11.7263H11.3677C11.7787 11.7263 12.1127 11.3923 12.1127 10.9813C12.1127 10.5703 11.7787 10.2363 11.3677 10.2363H9.63969Z' />
      </svg>
    </>
  )
}

export { PaperPlus }