import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const SvgComponent = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    strokeLinecap='round'
    strokeLinejoin='round'
    viewBox='0 0 24 24'
    {...props}
    fill='none'
  >
    <Path
      stroke={props.fill}
      strokeWidth={props?.strokeWidth || 1.5}
      d='M3.75 6.563a1.875 1.875 0 0 1 1.875-1.875h11.25a1.875 1.875 0 0 1 1.875 1.875v11.25a1.875 1.875 0 0 1-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V6.563zM15 2.813v3.75M7.5 2.813v3.75M3.75 10.313h15M7.5 13.125v3.75M11.25 13.125v3.75M15 13.125v3.75'
    />
  </Svg>
)
export default SvgComponent
