import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import UserSection from './UserSection';
import GameSection from './GameSection';
import {useAppDispatch} from '../../app/hooks';
import {initializeGameAndUser} from '../../features/init';

const GameHeader = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initializeGameAndUser());
  }, []);

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
