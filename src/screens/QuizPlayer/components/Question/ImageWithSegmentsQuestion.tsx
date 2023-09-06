import {
  StyleSheet,
  Text,
  FlatList,
  Image,
  View,
  ImageSourcePropType,
} from 'react-native';
import React from 'react';
import {ImageWithSegments, QuestionSegment} from '../../../../utils/types';

const segmentsSeparator = () => {
  return <View style={styles.separator} />;
};

const TextSegment = ({content}: {content: string}) => {
  return <Text style={styles.segmentText}>{content}</Text>;
};

const ImageSegment = ({source}: {source: ImageSourcePropType}) => {
  return (
    <View style={styles.segmentImageContainer}>
      <Image source={source} style={styles.segmentImage} />
    </View>
  );
};

const ImageWithSegmentsQuestion = ({quiz}: {quiz: ImageWithSegments}) => {
  const renderSegment = ({item: segment}: {item: QuestionSegment}) => {
    switch (segment.type) {
      case 'text':
        return <TextSegment content={segment.value} />;
      case 'image':
        return <ImageSegment source={segment.value} />;
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
          data={quiz.segments}
          renderItem={renderSegment}
          ItemSeparatorComponent={segmentsSeparator}
        />
      </View>
    </View>
  );
};

export default ImageWithSegmentsQuestion;

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
    height: 60,
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
    width: 44,
    height: 44,
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
