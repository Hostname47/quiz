import {
  StyleSheet,
  Text,
  FlatList,
  Image,
  View,
  ImageSourcePropType,
} from 'react-native';
import React from 'react';
import {ImageWithHintsQuiz, QuestionHint} from '../../../../utils/types';

const hintsSeparator = () => {
  return <View style={styles.separator} />;
};

const TextHint = ({content}: {content: string}) => {
  return <Text style={styles.segmentText}>{content}</Text>;
};

const ImageHint = ({source}: {source: ImageSourcePropType}) => {
  return (
    <View style={styles.segmentImageContainer}>
      <Image source={source} style={styles.segmentImage} />
    </View>
  );
};

const ImageWithHintsQuestion = ({quiz}: {quiz: ImageWithHintsQuiz}) => {
  const renderSegment = ({item: segment}: {item: QuestionHint}) => {
    switch (segment.type) {
      case 'text':
        return <TextHint content={segment.value} />;
      case 'image':
        return <ImageHint source={segment.value} />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={quiz.image} style={styles.image} />
      </View>
      <View style={styles.segmentsContainer}>
        <FlatList
          contentContainerStyle={styles.segmentsBox}
          horizontal
          data={quiz.hints}
          renderItem={renderSegment}
          ItemSeparatorComponent={hintsSeparator}
        />
      </View>
    </View>
  );
};

export default ImageWithHintsQuestion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
  },
  segmentsContainer: {
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: '#202226',
    height: 50,
    backgroundColor: '#111214',
    alignItems: 'center',
  },
  segmentsBox: {
    alignItems: 'center',
  },
  segmentText: {
    fontSize: 12,
    letterSpacing: 0.6,
  },
  segmentImageContainer: {
    width: 38,
    height: 38,
    backgroundColor: '#111214',
  },
  segmentImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 4,
  },
  separator: {
    width: 4,
    height: 4,
    borderRadius: 4,
    backgroundColor: '#5f6675',
    marginHorizontal: 8,
    alignSelf: 'center',
  },
});
