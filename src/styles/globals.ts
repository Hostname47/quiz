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
  },
  blue: {
    color: '#4fbeff',
  },
  titleIcon: {
    width: 20,
    height: 20,
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  centeredSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCenter: {
    textAlign: 'center',
  },
  text: {
    letterSpacing: 0.6,
    lineHeight: 20,
    fontSize: 14,
    marginBottom: 6,
  },
});
