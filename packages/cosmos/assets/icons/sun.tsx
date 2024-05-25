import clsx from 'clsx'

const Sun = ({ className }: { className?: string }) => {
  return (
    <>
      <svg
        viewBox='0 0 22 22'
        className={clsx('h-full w-full fill-inherit', className)}
      >
        <path d='M6 11.0088C6 8.23009 8.24779 6 11.0265 6C13.8053 6 16 8.23009 16 11.0088C16 13.7876 13.8053 16 11.0265 16C8.24779 16 6 13.7876 6 11.0088Z' />

        <path
          opacity='0.4'
          d='M9.9 2.56667V1.1C9.9 0.808262 10.0159 0.528473 10.2222 0.322183C10.4285 0.115893 10.7083 0 11 0C11.2917 0 11.5715 0.115893 11.7778 0.322183C11.9841 0.528473 12.1 0.808262 12.1 1.1V2.56667C12.1 2.8584 11.9841 3.13819 11.7778 3.34448C11.5715 3.55077 11.2917 3.66667 11 3.66667C10.7083 3.66667 10.4285 3.55077 10.2222 3.34448C10.0159 3.13819 9.9 2.8584 9.9 2.56667ZM3.98842 5.54492C4.09074 5.64724 4.21221 5.7284 4.3459 5.78378C4.47959 5.83916 4.62288 5.86766 4.76758 5.86766C4.91229 5.86766 5.05558 5.83916 5.18927 5.78378C5.32295 5.7284 5.44443 5.64724 5.54675 5.54492C5.64907 5.4426 5.73024 5.32112 5.78561 5.18743C5.84099 5.05374 5.86949 4.91045 5.86949 4.76575C5.86949 4.62105 5.84099 4.47776 5.78561 4.34407C5.73024 4.21038 5.64907 4.08891 5.54675 3.98658L4.44675 2.88658C4.2401 2.67994 3.95983 2.56384 3.66758 2.56384C3.37534 2.56384 3.09506 2.67994 2.88842 2.88658C2.68177 3.09323 2.56568 3.37351 2.56568 3.66575C2.56568 3.95799 2.68177 4.23827 2.88842 4.44492L3.98842 5.54492ZM3.98842 16.4533L2.88842 17.5533C2.78609 17.6556 2.70493 17.777 2.64955 17.9107C2.59418 18.0444 2.56568 18.1877 2.56568 18.3324C2.56568 18.4771 2.59418 18.6204 2.64955 18.7541C2.70493 18.8878 2.78609 19.0093 2.88842 19.1116C3.09506 19.3182 3.37534 19.4343 3.66758 19.4343C3.81229 19.4343 3.95558 19.4058 4.08927 19.3504C4.22295 19.2951 4.34443 19.2139 4.44675 19.1116L5.54675 18.0116C5.7534 17.8049 5.86949 17.5247 5.86949 17.2324C5.86949 16.9402 5.7534 16.6599 5.54675 16.4533C5.3401 16.2466 5.05983 16.1305 4.76758 16.1305C4.47534 16.1305 4.19506 16.2466 3.98842 16.4533ZM17.2333 5.86667C17.3778 5.86678 17.5209 5.83842 17.6545 5.78322C17.788 5.72801 17.9094 5.64703 18.0116 5.54492L19.1116 4.44492C19.2139 4.3426 19.2951 4.22112 19.3504 4.08743C19.4058 3.95374 19.4343 3.81045 19.4343 3.66575C19.4343 3.52105 19.4058 3.37776 19.3504 3.24407C19.2951 3.11038 19.2139 2.98891 19.1116 2.88658C19.0093 2.78426 18.8878 2.7031 18.7541 2.64772C18.6204 2.59234 18.4771 2.56384 18.3324 2.56384C18.1877 2.56384 18.0444 2.59234 17.9107 2.64772C17.777 2.7031 17.6556 2.78426 17.5533 2.88658L16.4533 3.98658C16.2985 4.14044 16.193 4.33684 16.1502 4.55082C16.1074 4.7648 16.1291 4.98668 16.2128 5.18824C16.2964 5.3898 16.4381 5.56193 16.6198 5.68274C16.8016 5.80354 17.0151 5.86757 17.2333 5.86667ZM18.0116 16.4551C17.8049 16.2484 17.5247 16.1323 17.2324 16.1323C16.9402 16.1323 16.6599 16.2484 16.4533 16.4551C16.2466 16.6617 16.1305 16.942 16.1305 17.2342C16.1305 17.5265 16.2466 17.8068 16.4533 18.0134L17.5533 19.1134C17.7599 19.3201 18.0402 19.4362 18.3324 19.4362C18.6247 19.4362 18.9049 19.3201 19.1116 19.1134C19.3182 18.9068 19.4343 18.6265 19.4343 18.3342C19.4343 18.042 19.3182 17.7617 19.1116 17.5551L18.0116 16.4551ZM3.66667 11C3.66667 10.7083 3.55077 10.4285 3.34448 10.2222C3.13819 10.0159 2.8584 9.9 2.56667 9.9H1.1C0.808262 9.9 0.528473 10.0159 0.322183 10.2222C0.115893 10.4285 0 10.7083 0 11C0 11.2917 0.115893 11.5715 0.322183 11.7778C0.528473 11.9841 0.808262 12.1 1.1 12.1H2.56667C2.8584 12.1 3.13819 11.9841 3.34448 11.7778C3.55077 11.5715 3.66667 11.2917 3.66667 11ZM11 18.3333C10.7083 18.3333 10.4285 18.4492 10.2222 18.6555C10.0159 18.8618 9.9 19.1416 9.9 19.4333V20.9C9.9 21.1917 10.0159 21.4715 10.2222 21.6778C10.4285 21.8841 10.7083 22 11 22C11.2917 22 11.5715 21.8841 11.7778 21.6778C11.9841 21.4715 12.1 21.1917 12.1 20.9V19.4333C12.1 19.1416 11.9841 18.8618 11.7778 18.6555C11.5715 18.4492 11.2917 18.3333 11 18.3333ZM20.9 9.9H19.4333C19.1416 9.9 18.8618 10.0159 18.6555 10.2222C18.4492 10.4285 18.3333 10.7083 18.3333 11C18.3333 11.2917 18.4492 11.5715 18.6555 11.7778C18.8618 11.9841 19.1416 12.1 19.4333 12.1H20.9C21.1917 12.1 21.4715 11.9841 21.6778 11.7778C21.8841 11.5715 22 11.2917 22 11C22 10.7083 21.8841 10.4285 21.6778 10.2222C21.4715 10.0159 21.1917 9.9 20.9 9.9Z'
        />
      </svg>
    </>
  )
}

export { Sun }
