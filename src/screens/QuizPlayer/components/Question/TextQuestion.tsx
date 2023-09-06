import {StyleSheet, ScrollView, Text, View} from 'react-native';
import React from 'react';
import {TextQuiz} from '../../../../utils/types';

const TextQuestion = ({quiz}: {quiz: TextQuiz}) => {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
        <Text style={styles.question}>{quiz.question}</Text>
      </ScrollView>
    </View>
  );
};

export default TextQuestion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  question: {
    fontWeight: '600',
    lineHeight: 24,
    textAlign: 'center',
  },
});
