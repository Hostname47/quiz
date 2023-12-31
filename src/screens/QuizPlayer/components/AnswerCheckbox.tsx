import {StyleSheet, View} from 'react-native';
import React from 'react';

const AnswerCheckbox = ({state}: {state: boolean | null}) => {
  /*
   *  Please note here that we should not check for only truthy or falsy,
   *  because the quiz could not be answered yet and the condition fall into
   *  the falsy condition which is not what we want; If the quiz is not answered
   *  yet, we don't want to show anything indife the checkbox
   */
  return (
    <View style={styles.box}>
      {state === null ? null : state ? (
        <View style={[styles.dot, styles.green]} />
      ) : (
        <View style={[styles.dot, styles.red]} />
      )}
    </View>
  );
};

export default AnswerCheckbox;

const styles = StyleSheet.create({
  box: {
    width: 15,
    height: 15,
    borderRadius: 3,
    borderWidth: 2.4,
    borderColor: '#eaeced',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    position: 'absolute',
    width: 7,
    height: 7,
    borderRadius: 1,
  },
  green: {
    backgroundColor: '#56e264',
  },
  red: {
    backgroundColor: '#ff5b5b',
  },
});
