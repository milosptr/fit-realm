import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox={'0 0 24 24'} {...props} fill='none'>
    <Path
      fill={props.fill}
      stroke={props.fill}
      strokeWidth={0.5}
      d='m10.15 11.975 4.425 4.425c.15.15.22.325.212.525a.767.767 0 0 1-.237.525.734.734 0 0 1-.538.225.734.734 0 0 1-.537-.225l-4.95-4.95a.761.761 0 0 1-.175-.25.734.734 0 0 1-.05-.275c0-.1.017-.192.05-.275a.761.761 0 0 1 .175-.25L13.5 6.475c.15-.15.33-.225.537-.225.209 0 .388.075.538.225.15.15.225.33.225.537a.734.734 0 0 1-.225.538l-4.425 4.425Z'
    />
  </Svg>
)
export default SvgComponent
