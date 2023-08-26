import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import UserSection from './UserSection';
import GameSection from './GameSection';

const GameHeader = () => {
  return (
    <View style={styles.container}>
      <UserSection />
      <GameSection />
    </View>
  );
};

export default GameHeader;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flexDirection: 'row',
    backgroundColor: '#373a42',
    borderBottomWidth: 1,
    borderBottomColor: '#424651',
  },
});
