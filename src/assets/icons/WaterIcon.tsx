import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const SvgComponent = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox='-0.75 -0.75 24 24'
    {...props}
    fill='transparent'
  >
    <Path
      stroke={props.fill}
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d='M18.465 14.258c0 4.428-2.787 7.215-7.215 7.215s-7.215-2.787-7.215-7.215c0-4.751 5.172-11.166 6.759-13.021a.602.602 0 0 1 .913 0c1.586 1.855 6.758 8.27 6.758 13.021Z'
    />
    <Path
      stroke={props.fill}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M15.66 14.659a3.608 3.608 0 0 1-3.608 3.608'
    />
  </Svg>
)
export default SvgComponent
