import clsx from 'clsx'

const Download = ({ className }: { className?: string }) => {
  return (
    <>
      <svg
        viewBox='0 0 20 20'
        className={clsx('h-full w-full fill-inherit', className)}
      >
        <g opacity='0.4'>
          <path d='M14.0149 7.011C12.199 7.011 10.7059 5.508 10.7059 3.675V0.459C10.7059 0.206 10.503 0 10.2525 0H4.96436C2.49604 0 0.5 2.026 0.5 4.509V15.284C0.5 17.889 2.59109 20 5.1703 20H13.0455C15.5059 20 17.5 17.987 17.5 15.502V7.471C17.5 7.217 17.298 7.012 17.0465 7.013C16.6238 7.016 16.1168 7.021 15.8089 7.021C15.3574 7.021 14.7594 7.011 14.0149 7.011Z' />
        </g>
        <g opacity='0.4'>
          <path d='M12.2637 0.901309V3.53831C12.2637 4.64431 13.1737 5.55431 14.2797 5.55431C14.9777 5.56231 15.9457 5.56431 16.7677 5.56231C17.1887 5.56131 17.4027 5.05831 17.1107 4.75431C16.0557 3.65731 14.1667 1.69131 13.0847 0.567309C12.7857 0.256309 12.2637 0.470309 12.2637 0.901309Z' />
        </g>
        <path d='M11.0508 10.7109L9.46175 12.3079V7.4809C9.46175 7.0699 9.12775 6.7359 8.71675 6.7359C8.30575 6.7359 7.97175 7.0699 7.97175 7.4809V12.3079L6.38175 10.7109C6.09075 10.4179 5.61975 10.4199 5.32875 10.7089C5.03675 10.9989 5.03675 11.4699 5.32575 11.7619L8.18875 14.6379C8.25675 14.7059 8.33875 14.7609 8.42975 14.7989C8.51975 14.8359 8.61775 14.8559 8.71675 14.8559C8.81675 14.8559 8.91475 14.8359 9.00475 14.7979C9.09375 14.7609 9.17475 14.7059 9.24275 14.6389L9.24475 14.6379L12.1068 11.7619C12.3968 11.4699 12.3968 10.9989 12.1048 10.7089C11.8128 10.4199 11.3428 10.4179 11.0508 10.7109Z' />
      </svg>
    </>
  )
}

export { Download }
