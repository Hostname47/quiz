import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
    color: '#4fbeff',
  },
  blue: {
    color: '#4fbeff',
  },
  titleIcon: {
    width: 20,
    height: 20,
    fill: '#4fbeff',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
});
