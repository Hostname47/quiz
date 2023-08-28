import {StyleSheet, View} from 'react-native';
import React from 'react';
import UserSection from './UserSection';
import GameSection from './GameSection';

const GameHeader = () => {
  return (
    <View style={styles.container}>
      <UserSection />
      <View style={styles.separator} />
      <GameSection />
    </View>
  );
};

export default GameHeader;

const styles = StyleSheet.create({
  container: {
    height: 76,
    flexDirection: 'row',
    backgroundColor: '#373a42',
    borderBottomWidth: 1,
    borderBottomColor: '#5a6070',
  },
  separator: {
    width: 1,
    backgroundColor: '#5a6070',
  },
});
