import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ImageQuiz} from '../../../../utils/types';

const ImageQuestion = ({quiz}: {quiz: ImageQuiz}) => {
  return (
    <View style={styles.container}>
      <Text>ImageQuestion</Text>
    </View>
  );
};

export default ImageQuestion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
