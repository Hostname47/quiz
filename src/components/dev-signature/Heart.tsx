import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import LoveIcon from './LoveIcon';

const Heart = () => {
  const [dimensions, setDimensions] = useState({width: 16, height: 16});

  useEffect(() => {
    const interval = setInterval(() => {
      if (dimensions.width === 16) {
        setDimensions({width: 18, height: 18});
      } else {
        setDimensions({width: 16, height: 16});
      }
    }, 400);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <View style={styles.heartBox}>
      <LoveIcon width={dimensions.width} height={dimensions.height} />
    </View>
  );
};

const styles = StyleSheet.create({
  heartBox: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 2,
    width: 24,
    height: 24,
  },
});

export default Heart;
