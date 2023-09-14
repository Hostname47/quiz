import {StyleSheet, Image, Text, View} from 'react-native';
import React from 'react';
import {ImageQuiz} from '../../../../utils/types';

const ImageQuestion = ({quiz}: {quiz: ImageQuiz}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={quiz.image} style={styles.image} />
      </View>
      <View style={styles.questionContainer}>
        <Text style={styles.question}>{quiz.question}</Text>
      </View>
    </View>
  );
};

export default ImageQuestion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: '100%',
  },
  image: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
  },
  questionContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8,
    backgroundColor: '#111214',
  },
  question: {
    fontWeight: '400',
    letterSpacing: 0.6,
    fontSize: 14,
    lineHeight: 22,
  },
});
