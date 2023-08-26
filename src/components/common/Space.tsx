import {View} from 'react-native';
import React from 'react';

type SpaceProps = {
  vertical?: boolean;
  distance: number;
};

const Space = ({vertical = false, distance}: SpaceProps) => {
  return <View style={vertical ? {height: distance} : {width: distance}} />;
};

export default Space;
