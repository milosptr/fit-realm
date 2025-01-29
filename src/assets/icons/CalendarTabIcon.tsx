import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox={'0 0 24 24'} {...props}>
    <Path d='M7.59.24c.813 0 1.47.657 1.47 1.47v1.47h5.88V1.71c0-.813.657-1.47 1.47-1.47s1.47.657 1.47 1.47v1.47h2.205c1.217 0 2.205.988 2.205 2.205V7.59H1.71V5.385c0-1.217.988-2.205 2.205-2.205H6.12V1.71c0-.813.657-1.47 1.47-1.47ZM1.71 9.06h20.58v12.495a2.206 2.206 0 0 1-2.205 2.205H3.915a2.206 2.206 0 0 1-2.205-2.205V9.06ZM5.385 12a.737.737 0 0 0-.735.735v4.41c0 .404.33.735.735.735h4.41c.404 0 .735-.33.735-.735v-4.41A.737.737 0 0 0 9.795 12h-4.41Z' />
  </Svg>
)
export default SvgComponent
