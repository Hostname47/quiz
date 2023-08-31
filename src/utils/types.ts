import {NavigationProp} from '@react-navigation/native';

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
