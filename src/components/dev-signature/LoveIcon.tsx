import React from 'react';
import {StyleSheet} from 'react-native';
import {Svg, Path} from 'react-native-svg';

const LoveIcon = props => (
  <Svg fill="red" style={styles.icon} viewBox="0 0 100 94.5" {...props}>
    <Path d="M86.82 26.63v-7.3h-8.18V12H62.27v7.29h-8.18v7.3h-8.18v-7.3h-8.18V12H21.36v7.29h-8.18v7.3H5V48.5h8.18v7.29h8.18v7.29h8.19v7.29h8.18v7.3h8.18V85h8.18v-7.33h8.18v-7.3h8.18v-7.29h8.19v-7.29h8.18V48.5H95V26.63Z" />
  </Svg>
);

const styles = StyleSheet.create({
  icon: {
    width: 16,
    stroke: '#331010',
    strokeWidth: 5,
  },
});

export default LoveIcon;
