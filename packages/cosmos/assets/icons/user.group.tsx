import clsx from 'clsx'

const UserGroup = ({ className }: { className?: string }) => {
  return (
    <>
      <svg
        viewBox='0 0 20 20'
        className={clsx('h-full w-full fill-inherit', className)}
      >
        <g>
          <path d='M4.58789 13.2794C4.58789 15.4561 7.51765 16 10.9488 16C14.3988 16 17.3098 15.4362 17.3098 13.2605C17.3098 11.0839 14.38 10.5399 10.9488 10.5399C7.49884 10.5399 4.58789 11.1037 4.58789 13.2794Z' />
        </g>
        <g opacity='0.4'>
          <path d='M15.1588 4.23351C15.1588 1.88306 13.2856 0 10.9495 0C8.61342 0 6.74023 1.88306 6.74023 4.23351C6.74023 6.58307 8.61342 8.46703 10.9495 8.46703C13.2856 8.46703 15.1588 6.58307 15.1588 4.23351Z' />
        </g>
        <g opacity='0.4'>
          <path d='M16.6645 0.706604C16.4192 0.706604 16.1846 0.733621 15.9554 0.779549C15.9249 0.786753 15.8909 0.802063 15.873 0.82908C15.8524 0.863301 15.8676 0.909229 15.89 0.938947C16.5678 1.89534 16.9573 3.05976 16.9573 4.30973C16.9573 5.50747 16.6001 6.62416 15.9733 7.55083C15.9088 7.64629 15.9661 7.77507 16.0798 7.79488C16.2374 7.8228 16.3986 7.83721 16.5634 7.84171C18.2064 7.88494 19.6811 6.82138 20.0886 5.21929C20.693 2.84182 18.9209 0.706604 16.6645 0.706604Z' />
        </g>
        <path d='M19.6783 9.51295C19.1572 9.38507 17.747 9.20496 16.4352 9.22928C16.4155 9.23198 16.4048 9.24549 16.403 9.25449C16.4003 9.2671 16.4057 9.28871 16.4316 9.30222C17.0378 9.60391 19.3811 10.916 19.0865 13.6834C19.074 13.8032 19.1698 13.9068 19.2888 13.8888C19.8655 13.8059 21.3492 13.4853 21.8094 12.4866C22.0637 11.9589 22.0637 11.3456 21.8094 10.817C21.5086 10.1722 20.7824 9.72999 19.6783 9.51295Z' />
        <g opacity='0.4'>
          <path d='M5.33592 0.706848C3.0795 0.706848 1.3075 2.84207 1.91279 5.21953C2.31931 6.82162 3.79403 7.88518 5.4371 7.84195C5.60185 7.83745 5.76392 7.82214 5.92061 7.79513C6.03433 7.77531 6.09164 7.64653 6.02717 7.55107C5.40039 6.6235 5.04312 5.50771 5.04312 4.30997C5.04312 3.0591 5.43352 1.89468 6.11134 0.939192C6.13283 0.909473 6.14894 0.863545 6.12745 0.829324C6.10954 0.801407 6.07642 0.786998 6.04508 0.779793C5.81675 0.732964 5.58126 0.706848 5.33592 0.706848Z' />
        </g>
        <path d='M0.191392 10.8166C-0.0637974 11.3453 -0.0637974 11.9585 0.191392 12.4872C0.651629 13.485 2.13531 13.8065 2.71195 13.8884C2.83104 13.9065 2.92595 13.8038 2.91342 13.6831C2.61883 10.9166 4.9621 9.6045 5.56918 9.30281C5.59425 9.2884 5.59962 9.26769 5.59694 9.25418C5.59515 9.24517 5.5853 9.23166 5.5656 9.22986C4.25294 9.20465 2.84358 9.38476 2.32156 9.51264C1.21752 9.72967 0.492248 10.1718 0.191392 10.8166Z' />
      </svg>
    </>
  )
}

export { UserGroup }
