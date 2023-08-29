import React from 'react';
import {Path, Svg, SvgProps} from 'react-native-svg';

const LeftArrow = (props: SvgProps) => (
  <Svg viewBox="0 0 260 260" {...props}>
    <Path d="M127.14 222.46 34.71 130l92.49-92.46 16.52 16.52-63.27 63.27h144.84c-.24 8.67-.45 16.27-.66 24.09H81.81l-.56 1.49 62.75 62.7Z" />
  </Svg>
);

export default LeftArrow;
