import {StyleSheet, Image, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {ImageQuiz} from '../../../../utils/types';

const ImageQuestion = ({quiz}: {quiz: ImageQuiz}) => {
  const [fullscreen, setFullscreen] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setFullscreen(v => !v)}
        style={[styles.imageContainer, fullscreen ? styles.fullscreen : {}]}
        activeOpacity={0.9}>
        <Image source={quiz.image} style={styles.image} />
      </TouchableOpacity>
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
  fullscreen: {
    position: 'absolute',
    zIndex: 5,
    left: 0,
    right: 0,
    top: 0,
    bottom: 1,
    backgroundColor: 'black',
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
    marginTop: 'auto',
  },
  question: {
    fontWeight: '600',
    letterSpacing: 0.6,
    fontSize: 14,
    lineHeight: 22,
  },
});
