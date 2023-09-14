import {
  StyleSheet,
  Text,
  FlatList,
  Image,
  View,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import React, {useState} from 'react';
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
  const [fullscreen, setFullscreen] = useState(false);

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
      <TouchableOpacity
        onPress={() => setFullscreen(v => !v)}
        style={[styles.imageContainer, fullscreen ? styles.fullscreen : {}]}
        activeOpacity={0.9}>
        <Image source={quiz.image} style={styles.image} />
      </TouchableOpacity>
      <View style={styles.questionContainer}>
        <Text style={styles.question}>{quiz.question}</Text>
      </View>
      <View style={styles.segmentsContainer}>
        <Text style={styles.label}>Hints : </Text>
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
  fullscreen: {
    position: 'absolute',
    zIndex: 5,
    left: 0,
    right: 0,
    top: 0,
    bottom: 1,
    backgroundColor: 'black',
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
    paddingTop: 8,
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
  segmentsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: '#202226',
    height: 50,
    backgroundColor: '#111214',
    alignItems: 'center',
    justifyContent: 'center',
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
    width: 3,
    height: 3,
    borderRadius: 4,
    backgroundColor: '#5f6675',
    marginHorizontal: 8,
    alignSelf: 'center',
  },
  label: {
    fontWeight: '600',
    fontSize: 13,
    letterSpacing: 1,
    color: '#959fa8',
  },
});
