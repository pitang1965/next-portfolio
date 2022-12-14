import { SVGProps } from 'react';

export const GitForkIcon = ({
  width = 24,
  height = 24,
  color = 'black',
}: SVGProps<SVGElement>): JSX.Element => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-git-fork'
    width={width}
    height={height}
    viewBox='0 0 24 24'
    strokeWidth={2}
    stroke={color}
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
    <circle cx={12} cy={18} r={2}></circle>
    <circle cx={7} cy={6} r={2}></circle>
    <circle cx={17} cy={6} r={2}></circle>
    <path d='M7 8v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2 -2v-2'></path>
    <line x1={12} y1={12} x2={12} y2={16}></line>
  </svg>
);
