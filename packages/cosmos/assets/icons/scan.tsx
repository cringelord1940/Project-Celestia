import clsx from 'clsx'

const Scan = ({ className }: { className?: string }) => {
  return (
    <>
      <svg
        viewBox='0 0 20 20'
        className={clsx('h-full w-full fill-inherit', className)}
      >
        <g opacity='0.4'>
          <path d='M6.23962 7.5231C6.09202 7.5177 5.97322 7.3989 5.96962 7.254V6.0084C5.95882 4.7682 6.97492 3.7557 8.23942 3.7431H13.7627C14.3684 3.7431 14.9489 3.9807 15.3719 4.4055C15.7976 4.8339 16.0343 5.4099 16.0334 6.0084V7.254C16.028 7.4007 15.9092 7.5186 15.7598 7.5231H6.23962ZM18.6551 5.7627V3.906C18.6551 2.5758 17.5508 1.4931 16.1945 1.4931H14.6015C14.1812 1.4931 13.8401 1.1592 13.8401 0.7479C13.8401 0.3348 14.1812 0 14.6015 0H16.1945C18.3914 0 20.177 1.7514 20.177 3.906V5.7627C20.177 6.174 19.8368 6.5097 19.4165 6.5097C18.9962 6.5097 18.6551 6.174 18.6551 5.7627ZM1.82422 5.7618V3.9024C1.82422 1.7532 3.60712 0.0027 5.79862 0.0009L7.42762 0C7.84702 0 8.18902 0.3348 8.18902 0.747C8.18902 1.1592 7.84882 1.4931 7.42852 1.4931L5.79952 1.494C4.44682 1.4967 3.34702 2.5758 3.34702 3.9024V5.7618C3.34702 6.174 3.00502 6.5088 2.58562 6.5088C2.16532 6.5088 1.82422 6.174 1.82422 5.7618Z' />
        </g>
        <path d='M0.762 9.04126C0.342 9.04126 0 9.37564 0 9.78848C0 10.2003 0.342 10.5337 0.762 10.5337H1.823V14.0972C1.823 16.2467 3.607 17.9971 5.798 17.999L7.427 18C7.848 18 8.188 17.6656 8.189 17.2528C8.189 16.841 7.848 16.5066 7.428 16.5066L5.8 16.5056C4.447 16.5036 3.346 15.424 3.346 14.0972V10.5337H5.969V11.5251C5.959 12.7656 6.974 13.7795 8.238 13.7913H13.762C15.027 13.7795 16.042 12.7656 16.032 11.5251V10.5337H18.655V14.0933C18.655 15.425 17.551 16.5066 16.194 16.5066H14.601C14.18 16.5066 13.839 16.841 13.839 17.2528C13.839 17.6656 14.18 18 14.601 18H16.194C18.39 18 20.177 16.2487 20.177 14.0933V10.5337H21.239C21.659 10.5337 22 10.2003 22 9.78848C22 9.37564 21.659 9.04126 21.239 9.04126H0.762Z' />
      </svg>
    </>
  )
}

export { Scan }
