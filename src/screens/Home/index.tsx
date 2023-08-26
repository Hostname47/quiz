import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GameHeader from '../../components/common/GameHeader';

const Home = () => {
  return (
    <View style={styles.container}>
      <GameHeader />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {},
});
