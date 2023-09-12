import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import React from 'react';
import LevelIcon from '../../../components/icons/LevelIcon';
import Space from '../../../components/common/Space';
import HelpIcon from '../../../components/icons/HelpIcon';
import GearIcon from '../../../components/icons/GearIcon';
import {useAppDispatch, useAppSelector} from '../../../app/hooks';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {reduceHelp} from '../../../features/game/gameSlice';
import {QuizAnswer} from '../../../utils/types';

type ActionsType = {
  answer: QuizAnswer;
  supportApplied: boolean;
  applySupport: () => void;
  switchResultModal: (to?: boolean) => void;
};

const Actions = ({
  answer,
  supportApplied,
  applySupport,
  switchResultModal,
}: ActionsType) => {
  const game = useAppSelector(state => state.game);
  const dispatch = useAppDispatch();

  const support = async () => {
    applySupport();
    dispatch(reduceHelp());

    const data = await AsyncStorage.getItem('game');
    if (data) {
      const game = JSON.parse(data);
      game.helps--;
      await AsyncStorage.setItem('game', JSON.stringify(game));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.levelBox}>
        <LevelIcon style={styles.actionIcon} fill="#aebdc4" />
        <Space distance={4} />
        <Text style={styles.actionTitle}>
          Level : <Text style={styles.level}>{game.quiz.level}</Text>
        </Text>
      </View>

      <View style={styles.buttonsBox}>
        <TouchableOpacity
          style={[
            styles.button,
            (answer !== '' || supportApplied || game.helps === 0) && {
              opacity: 0.5,
            },
          ]}
          disabled={answer !== '' || supportApplied || game.helps === 0}
          onPress={support}>
          <HelpIcon style={styles.buttonIcon} fill="#ede43b" />
          <Space distance={8} />
          <Text style={styles.buttonTitle}>{game.helps}</Text>
        </TouchableOpacity>
        <View style={styles.buttonSeparator} />
        <TouchableOpacity
          style={[styles.button, answer === '' && {opacity: 0.5}]}
          disabled={answer === ''}
          onPress={() => switchResultModal(true)}>
          <GearIcon style={styles.buttonIcon} fill="#4fbeff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Actions;

const styles = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#111214',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  actionIcon: {
    width: 16,
    height: 16,
  },
  actionTitle: {
    fontWeight: '700',
    color: '#aebdc4',
    fontSize: 13,
    letterSpacing: 0.4,
  },
  levelBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: 'gray',
    paddingHorizontal: 12,
  },
  level: {
    color: '#4fbeff',
  },
  buttonsBox: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    paddingHorizontal: 14,
  },
  buttonIcon: {
    width: 24,
    height: 24,
  },
  buttonTitle: {
    fontWeight: '600',
    fontSize: 16,
    paddingBottom: 1,
  },
  buttonSeparator: {
    width: 1,
    height: 16,
    backgroundColor: 'gray',
  },
});
