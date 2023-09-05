import {StyleSheet, Image, View} from 'react-native';
import React from 'react';
import {ImageQuiz} from '../../../../utils/types';

const ImageQuestion = ({quiz}: {quiz: ImageQuiz}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={quiz.image} style={styles.image} />
      </View>
    </View>
  );
};

export default ImageQuestion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  image: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
  },
});
