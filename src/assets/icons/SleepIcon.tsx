import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const SvgComponent = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox={'0 0 24 24'}
    {...props}
    fill='transparent'
  >
    <Path
      stroke={props.fill}
      strokeLinecap='round'
      strokeWidth={1.5}
      d='M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2'
    />
    <Path
      stroke={props.fill}
      strokeLinecap='round'
      strokeWidth={1.5}
      d='M6.5 11c.567.63 1.256 1 2 1s1.433-.37 2-1M13.5 11c.567.63 1.256 1 2 1s1.433-.37 2-1'
    />
    <Path fill={props.fill} d='M13 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z' />
    <Path
      stroke={props.fill}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='m17 4 3.464-2L19 7.464l3.464-2M14.048 5.5l1.732 1-2.732.732 1.732 1'
    />
  </Svg>
)
export default SvgComponent
