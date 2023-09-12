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
  type: 'text' | 'image' | 'image-with-hints';
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
 * The structure of hint type might be changed later
 */
export type QuestionHint =
  | {
      type: 'text';
      value: string;
    }
  | {
      type: 'image';
      value: ImageSourcePropType;
    };

export type ImageWithHintsQuiz = Quiz & {
  image: any;
  hints: QuestionHint[];
};

export type QuizItem = TextQuiz | ImageQuiz | ImageWithHintsQuiz;
