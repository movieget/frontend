import type { SVGProps } from 'react'

export function LineMdEmojiNeutral(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={48} height={48} viewBox='0 0 24 24' {...props}>
      <g
        fill='none'
        stroke={props.color || '#fdfdfd'}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
      >
        <path
          strokeDasharray={64}
          strokeDashoffset={64}
          d='M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9'
        >
          <animate
            fill='freeze'
            attributeName='stroke-dashoffset'
            dur='0.6s'
            values='64;0'
          ></animate>
        </path>
        <path strokeDasharray={2} strokeDashoffset={2} d='M9 9v1'>
          <animate
            fill='freeze'
            attributeName='stroke-dashoffset'
            begin='0.7s'
            dur='0.2s'
            values='2;0'
          ></animate>
        </path>
        <path strokeDasharray={2} strokeDashoffset={2} d='M15 9v1'>
          <animate
            fill='freeze'
            attributeName='stroke-dashoffset'
            begin='0.9s'
            dur='0.2s'
            values='2;0'
          ></animate>
        </path>
        <path strokeDasharray={10} strokeDashoffset={10} d='M8 15h8'>
          <animate
            fill='freeze'
            attributeName='stroke-dashoffset'
            begin='1.1s'
            dur='0.2s'
            values='10;0'
          ></animate>
        </path>
      </g>
    </svg>
  )
}
