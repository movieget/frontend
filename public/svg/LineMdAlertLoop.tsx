import type { SVGProps } from 'react'

export function LineMdAlertLoop(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} viewBox='0 0 24 24' {...props}>
      <g
        fill='none'
        stroke={props.color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
      >
        <path strokeDasharray={64} strokeDashoffset={64} d='M12 3l9 17h-18l9 -17Z'>
          <animate
            fill='freeze'
            attributeName='stroke-dashoffset'
            dur='0.6s'
            values='64;0'
          ></animate>
        </path>
        <path strokeDasharray={6} strokeDashoffset={6} d='M12 10v4'>
          <animate
            fill='freeze'
            attributeName='stroke-dashoffset'
            begin='0.6s'
            dur='0.2s'
            values='6;0'
          ></animate>
          <animate
            attributeName='stroke-width'
            begin='1.8s'
            dur='3s'
            keyTimes='0;0.1;0.2;0.3;1'
            repeatCount='indefinite'
            values='2;3;3;2;2'
          ></animate>
        </path>
        <path strokeDasharray={2} strokeDashoffset={2} d='M12 17v0.01'>
          <animate
            fill='freeze'
            attributeName='stroke-dashoffset'
            begin='0.8s'
            dur='0.2s'
            values='2;0'
          ></animate>
          <animate
            attributeName='stroke-width'
            begin='2.1s'
            dur='3s'
            keyTimes='0;0.1;0.2;0.3;1'
            repeatCount='indefinite'
            values='2;3;3;2;2'
          ></animate>
        </path>
      </g>
    </svg>
  )
}
