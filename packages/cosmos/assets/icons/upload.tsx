import clsx from 'clsx'

const Upload = ({ className }: { className?: string }) => {
  return (
    <>
      <svg
        viewBox='0 0 20 20'
        className={clsx('h-full w-full fill-inherit', className)}
      >
        <g opacity='0.4'>
          <path d='M14.0146 7.011C12.1987 7.011 10.7055 5.508 10.7055 3.675V0.459C10.7055 0.206 10.5026 0 10.253 0H4.96363C2.49517 0 0.5 2.026 0.5 4.509V15.284C0.5 17.889 2.59022 20 5.16958 20H13.0453C15.5058 20 17.5 17.987 17.5 15.502V7.471C17.5 7.217 17.298 7.012 17.0465 7.013C16.6247 7.016 16.1168 7.021 15.8088 7.021C15.3573 7.021 14.7592 7.011 14.0146 7.011Z' />
        </g>
        <g opacity='0.4'>
          <path d='M12.2637 0.901309V3.53831C12.2637 4.64431 13.1747 5.55431 14.2797 5.55431C14.9777 5.56231 15.9457 5.56431 16.7677 5.56231C17.1887 5.56131 17.4027 5.05831 17.1107 4.75431C16.0557 3.65731 14.1667 1.69131 13.0847 0.567309C12.7857 0.256309 12.2637 0.470309 12.2637 0.901309Z' />
        </g>
        <path d='M11.0512 10.8817L9.46223 9.28469V14.1117C9.46223 14.5227 9.12823 14.8567 8.71723 14.8567C8.30623 14.8567 7.97323 14.5227 7.97323 14.1117V9.28469L6.38223 10.8817C6.09223 11.1747 5.62023 11.1727 5.32923 10.8837C5.03823 10.5947 5.03723 10.1227 5.32723 9.83069L8.18923 6.95569L8.19023 6.95469C8.25823 6.88669 8.34023 6.83169 8.43023 6.79469C8.52023 6.75669 8.61823 6.73669 8.71723 6.73669C8.81723 6.73669 8.91523 6.75669 9.00523 6.79469C9.09423 6.83169 9.17523 6.88669 9.24323 6.95369L9.24523 6.95569L12.1072 9.83069C12.3972 10.1227 12.3972 10.5947 12.1052 10.8837C11.8142 11.1727 11.3432 11.1747 11.0512 10.8817Z' />
      </svg>
    </>
  )
}

export { Upload }
