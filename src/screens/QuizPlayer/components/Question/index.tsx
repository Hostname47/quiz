import {View, StyleSheet} from 'react-native';
import React from 'react';
import {
  ImageQuiz,
  ImageWithSegments,
  QuizItem,
  TextQuiz,
} from '../../../../utils/types';
import TextQuestion from './TextQuestion';
import ImageQuestion from './ImageQuestion';
import ImageWithSegmentsQuestion from './ImageWithSegmentsQuestion';

const QuestionType = ({quiz}: {quiz: QuizItem}) => {
  switch (quiz.type) {
    case 'text':
      return <TextQuestion quiz={quiz as TextQuiz} />;
    case 'image':
      return <ImageQuestion quiz={quiz as ImageQuiz} />;
    case 'image-with-segments':
      return <ImageWithSegmentsQuestion quiz={quiz as ImageWithSegments} />;
  }
};

const Question = ({quiz}: {quiz: QuizItem}) => {
  return (
    <View style={styles.container}>
      <QuestionType quiz={quiz} />
    </View>
  );
};

export default Question;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1b1e',
    borderRadius: 4,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    overflow: 'hidden',
    maxHeight: 220,
  },
});
