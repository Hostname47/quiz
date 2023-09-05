import {NavigationProp} from '@react-navigation/native';
import {ImageSourcePropType} from 'react-native';

export type RootStackParamList = {
  Home: undefined;
  QuizzesMap: undefined;
  QuizPlayer: {id: 1} | undefined;
  Shop: undefined;
  More: undefined;
};

export type StackNavigation = NavigationProp<RootStackParamList>;
export type StackNavigationProps = {
  navigation?: StackNavigation;
};

export type QuizAnswer = string | number;

type Quiz = {
  level: number;
  type: 'text' | 'image' | 'image-with-segments';
  options: QuizAnswer[];
  answer: QuizAnswer;
};

export type TextQuiz = Quiz & {
  question: string;
};

export type ImageQuiz = TextQuiz & {
  image: ImageSourcePropType;
};

/**
 * The structure of segment type may change later
 */
type Segment =
  | {
      type: 'text';
      value: string;
    }
  | {
      type: 'image';
      value: ImageSourcePropType;
    };

export type ImageWithSegments = Quiz & {
  image: any;
  segments: Segment[]; // Here segments can be anything; It can be a string, number or even an image
};

export type QuizItem = TextQuiz | ImageQuiz | ImageWithSegments;
