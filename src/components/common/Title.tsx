import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type TitleProps = {
  title: string;
  size?: number;
  letterSpacing?: number;
};

const Title = ({title, size = 15, letterSpacing = 0.4}: TitleProps) => {
  return (
    <Text style={[styles.title, {fontSize: size, letterSpacing}]}>{title}</Text>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontWeight: '600',
    letterSpacing: 0.4,
  },
});
