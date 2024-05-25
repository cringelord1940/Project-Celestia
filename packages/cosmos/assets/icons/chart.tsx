import clsx from 'clsx'

const Chart = ({ className }: { className?: string }) => {
  return (
    <>
      <svg
        viewBox='0 0 20 20'
        className={clsx('h-full w-full fill-inherit', className)}
      >
        <g opacity='0.4'>
          <path d='M5.33333 0C1.92889 0 0 1.92889 0 5.33333V14.6667C0 18.0711 1.92889 20 5.33333 20H14.6756C18.08 20 20 18.0711 20 14.6667V5.33333C20 1.92889 18.08 0 14.6756 0H5.33333Z' />
        </g>
        <path d='M4.54199 8.20451V15.0756C4.54199 15.529 4.91533 15.9023 5.36866 15.9023C5.83088 15.9023 6.20421 15.529 6.20421 15.0756V8.20451C6.20421 7.74229 5.83088 7.36896 5.36866 7.36896C4.91533 7.36896 4.54199 7.74229 4.54199 8.20451Z' />
        <path d='M9.20898 4.92454V15.0757C9.20898 15.529 9.58232 15.9023 10.0357 15.9023C10.4979 15.9023 10.8712 15.529 10.8712 15.0757V4.92454C10.8712 4.46232 10.4979 4.08899 10.0357 4.08899C9.58232 4.08899 9.20898 4.46232 9.20898 4.92454Z' />
        <path d='M13.8047 11.8312V15.0757C13.8047 15.529 14.178 15.9023 14.6314 15.9023C15.0936 15.9023 15.4669 15.529 15.4669 15.0757V11.8312C15.4669 11.369 15.0936 10.9957 14.6402 10.9957C14.178 10.9957 13.8047 11.369 13.8047 11.8312Z' />
      </svg>
    </>
  )
}

export { Chart }
