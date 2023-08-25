import {DefaultTheme} from '@react-navigation/native';

export const navigationTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    card: '#191b1e',
    text: '#b3babf',
    background: '#2b2d33',
  },
};
