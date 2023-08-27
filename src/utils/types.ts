import {NavigationProp} from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  Quizzes: undefined;
  QuizPlayer: {id: 'latest'} | undefined;
  Shop: undefined;
  More: undefined;
};

export type StackNavigation = NavigationProp<RootStackParamList>;
export type StackNavigationProps = {
  navigation: StackNavigation;
};
