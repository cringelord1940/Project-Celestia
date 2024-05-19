import clsx from 'clsx'

const Email = ({ className }: { className?: string }) => {
  return (
    <>
      <svg
        viewBox='0 0 20 20'
        className={clsx('h-full w-full fill-inherit', className)}
      >
        <g opacity='0.4'>
          <path d='M14.97 18.0002H14.96H5.05C2.27 18.0002 0 15.7502 0 12.9602V12.9502C0 12.9502 0.006 8.52418 0.014 6.29818C0.015 5.88018 0.495 5.64618 0.822 5.90618C3.198 7.79118 7.447 11.2282 7.5 11.2732C8.21 11.8422 9.11 12.1632 10.03 12.1632C10.95 12.1632 11.85 11.8422 12.56 11.2622C12.613 11.2272 16.767 7.89318 19.179 5.97718C19.507 5.71618 19.989 5.95018 19.99 6.36718C20 8.57618 20 12.9402 20 12.9402C20 15.7302 17.76 17.9902 14.97 18.0002Z' />
        </g>
        <g>
          <path d='M15.0299 -0.000427246H5.04988C3.17388 -0.000427246 1.46988 1.04157 0.603884 2.67357C0.409884 3.03857 0.501884 3.49357 0.824884 3.75157L8.24988 9.69057C8.76988 10.1106 9.39988 10.3196 10.0299 10.3196C10.0339 10.3196 10.0369 10.3196 10.0399 10.3196C10.0429 10.3196 10.0469 10.3196 10.0499 10.3196C10.6799 10.3196 11.3099 10.1106 11.8299 9.69057L19.2549 3.75157C19.5779 3.49357 19.6699 3.03857 19.4759 2.67357C18.6099 1.04157 16.9059 -0.000427246 15.0299 -0.000427246Z' />
        </g>
      </svg>
    </>
  )
}

export { Email }