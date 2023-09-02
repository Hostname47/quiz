import {View, Text, StyleSheet} from 'react-native';
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
import LevelIcon from '../../../../components/icons/LevelIcon';
import Space from '../../../../components/common/Space';

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
      <View style={styles.actionsBox}>
        <View style={styles.actionSegment}>
          <LevelIcon style={styles.actionIcon} fill="#aebdc4" />
          <Space distance={4} />
          <Text style={styles.actionTitle}>
            Level : <Text style={styles.level}>{quiz.level}</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Question;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1b1e',
    borderRadius: 4,
    overflow: 'hidden',
  },
  actionsBox: {
    height: 46,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    backgroundColor: '#111214',
  },
  actionSegment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionIcon: {
    width: 16,
    height: 16,
  },
  actionTitle: {
    fontWeight: '700',
    color: '#aebdc4',
    fontSize: 13,
    letterSpacing: 0.4,
  },
  level: {
    color: '#4fbeff',
  },
});
