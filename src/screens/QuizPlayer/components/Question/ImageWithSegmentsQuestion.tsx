import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ImageWithSegments} from '../../../../utils/types';

const ImageWithSegmentsQuestion = ({quiz}: {quiz: ImageWithSegments}) => {
  return (
    <View style={styles.container}>
      <Text>ImageWithSegmentsQuestion</Text>
    </View>
  );
};

export default ImageWithSegmentsQuestion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
