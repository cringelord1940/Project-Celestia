const IceJiTriangleLogo = (props: { type?: string; style?: JSON }) => {
  if (props.type === 'stroke') {
    return (
      <>
        <svg viewBox='0 0 165 140' className='h-full w-full stroke-inherit'>
          <g transform='translate(-9.538 -67.7)' fill='none'>
            <path
              d='M367.136,148.551,357.7,164.893a2.149,2.149,0,0,0,0,2.149l17.128,29.67a2.149,2.149,0,0,1,0,2.145L368.253,210.3a2.149,2.149,0,0,1-3.726,0l-26.358-45.857a2.149,2.149,0,0,1,0-2.146l7.721-13.362.835-1.459.38-.655,9.794-16.968a2.149,2.149,0,0,1,1.861-1.075h33.81a2.149,2.149,0,0,0,1.861-1.074l21.989-38.084a2.149,2.149,0,0,0-1.861-3.223H385.713a2.149,2.149,0,0,1-1.861-3.223l2.44-4.224,5.873-10.175a2.149,2.149,0,0,1,1.861-1.075H446.5a2.149,2.149,0,0,1,1.863,3.219L404.984,146.4a2.149,2.149,0,0,1-1.863,1.078H369A2.149,2.149,0,0,0,367.136,148.551Z'
              transform='translate(-274.587)'
            />
            <path d='M102.975,79.968,35.6,80.044a2.149,2.149,0,0,0-2.145,2.23h0a2.149,2.149,0,0,0,2.133,2.068l62.187.411a2.149,2.149,0,0,1,1.85,3.217L61.542,154.413a2.149,2.149,0,0,1-3.727,0l-11.922-20.74a2.148,2.148,0,0,1,0-2.14l5.277-9.2a2.149,2.149,0,0,1,3.751.041l3.328,6.111a2.149,2.149,0,0,0,3.751.041l15.708-27.405a2.149,2.149,0,0,0-1.876-3.217L35.3,98.133a2.149,2.149,0,0,0-1.852,1.08l-1.811,3.159a2.149,2.149,0,0,1-3.727,0L9.827,70.92A2.149,2.149,0,0,1,11.69,67.7h95.851a2.149,2.149,0,0,1,1.864,3.217l-4.568,7.97A2.149,2.149,0,0,1,102.975,79.968Z' />
          </g>
        </svg>
      </>
    )
  } else {
    return (
      <svg viewBox='0 0 58.973 51.3' className='h-full w-full fill-inherit'>
        <g id='IIJ_White' transform='translate(-0.35 -69.85)'>
          <path
            d='M346.724,97.911l-3.756,6.5,6.461,11.192-3.186,5.542L336.1,103.5l2.933-5.077.294-.513.134-.23,3.663-6.347H355.89L364.5,76.427H351.731l1.513-2.62,2.284-3.957h20.2L359.6,97.911Z'
            transform='translate(-316.407)'
          />
          <line
            x1='0.045'
            y1='0.077'
            transform='translate(25.047 98.401)'
            fill='none'
          />
          <path
            d='M34.2,74.164l-24.92.029L9.341,75.7l23.892.158-14.7,25.637-5.066-8.813L16.216,87.9,18.68,92.42l6.851-11.952-16.006.09-1.508,2.63L.35,69.85H36.676Z'
            transform='translate(0)'
          />
        </g>
      </svg>
    )
  }
}

export { IceJiTriangleLogo }
