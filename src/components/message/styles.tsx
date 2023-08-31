import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 6,
    padding: 10,
    paddingRight: 66,
    borderRadius: 3,
  },
  errorContainer: {
    backgroundColor: '#af5050',
  },
  successContainer: {
    backgroundColor: '#45a058',
  },
  messageIcon: {
    width: 19,
    height: 19,
    marginRight: 6,
    marginTop: 2,
  },
  messageText: {
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 0.3,
    lineHeight: 22,
  },
  errorText: {
    color: '#f7dede',
  },
  successText: {
    color: '#d7eddc',
  },
  closeButton: {
    position: 'absolute',
    right: 8,
    top: 8,
    padding: 8,
    borderRadius: 50,
  },
  closeButtonIcon: {
    width: 10,
    height: 10,
  },
  errorCloseButton: {
    backgroundColor: '#c67979',
  },
  successCloseButton: {
    backgroundColor: '#68ba79',
  },
});
