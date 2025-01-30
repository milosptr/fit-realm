import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox={'0 0 24 24'} {...props} fill='none'>
    <Path
      fill={props.fill}
      stroke={props.fill}
      strokeWidth={props?.strokeWidth ?? 0}
      d='M13.25 11.975 8.825 7.55a.677.677 0 0 1-.213-.525.767.767 0 0 1 .238-.525c.15-.15.33-.225.537-.225.209 0 .388.075.538.225l4.95 4.95a.761.761 0 0 1 .175.25c.033.083.05.175.05.275 0 .1-.017.192-.05.275a.761.761 0 0 1-.175.25L9.9 17.475a.677.677 0 0 1-.525.212.767.767 0 0 1-.525-.237.734.734 0 0 1-.225-.538c0-.208.075-.387.225-.537l4.4-4.4Z'
    />
  </Svg>
)
export default SvgComponent
