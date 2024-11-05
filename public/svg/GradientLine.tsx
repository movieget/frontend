import { SVGProps } from 'react'

const GradientLine = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width='100%'
      height='97'
      viewBox='0 0 736 97'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g filter='url(#filter0_d_56_919)'>
        <path
          d='M-15 62C-15 56.2218 -5.09344 50.5002 14.1541 45.1619C33.4017 39.8236 61.6133 34.973 97.1781 30.8873C132.743 26.8015 174.965 23.5605 221.432 21.3493C267.9 19.1381 317.704 18 368 18C418.296 18 468.1 19.1381 514.568 21.3493C561.035 23.5605 603.257 26.8015 638.822 30.8873C674.387 34.9731 702.598 39.8236 721.846 45.162C741.093 50.5003 751 56.2219 751 62.0001'
          stroke='url(#paint0_linear_56_919)'
          strokeWidth='5'
        />
      </g>
      <defs>
        <filter
          id='filter0_d_56_919'
          x='-42.2'
          y='0.799999'
          width='820.4'
          height='95.9'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='10' />
          <feGaussianBlur stdDeviation='12.35' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.392157 0 0 0 0 0.133333 0 0 0 0 0.94902 0 0 0 1 0'
          />
          <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_56_919' />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_56_919'
            result='shape'
          />
        </filter>
        <linearGradient
          id='paint0_linear_56_919'
          x1='751'
          y1='40'
          x2='-15'
          y2='40'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#6422F2' />
          <stop offset='0.5' stopColor='#8767CA' />
          <stop offset='1' stopColor='#6422F2' />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default GradientLine
