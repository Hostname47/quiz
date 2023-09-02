import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextQuiz} from '../../../../utils/types';

const TextQuestion = ({quiz}: {quiz: TextQuiz}) => {
  return (
    <View style={styles.container}>
      <Text>TextQuestion</Text>
    </View>
  );
};

export default TextQuestion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
