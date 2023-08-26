import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DollarIcon from '../../icons/DollarIcon';
import {useAppSelector} from '../../../app/hooks';
import PlusIcon from '../../icons/PlusIcon';
import HeartIcon from '../../icons/HeartIcon';
import HelpIcon from '../../icons/HelpIcon';

const GameSection = () => {
  const game = useAppSelector(state => state.game);

  return (
    <View style={styles.container}>
      <View style={styles.segment}>
        <DollarIcon style={styles.segmentIcon} fill="#6cdd6e" />
        <Text style={styles.segmentValue}>{game.money}</Text>
        <PlusIcon style={styles.plusIcon} fill="white" />
      </View>
      <View style={[styles.segment, styles.helpsSegment]}>
        <HelpIcon
          style={[styles.segmentIcon, styles.helpIcon]}
          fill="#ede43b"
        />
        <Text style={styles.segmentValue}>{game.helps}</Text>
        <Text style={styles.helpsLabel}>help</Text>
      </View>
      <View style={styles.segment}>
        <HeartIcon style={styles.segmentIcon} fill="#ff5656" />
        <Text style={styles.segmentValue}>{game.lives}</Text>
        <PlusIcon style={styles.plusIcon} fill="white" />
      </View>
    </View>
  );
};

export default GameSection;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  segment: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2b2d33',
    padding: 6,
    borderRadius: 50,
  },
  segmentIcon: {
    width: 26,
    height: 26,
  },
  segmentValue: {
    fontFamily: 'Tajawal Bold',
    fontSize: 17,
    fontWeight: '600',
    marginHorizontal: 4,
  },
  plusIcon: {
    width: 14,
    height: 14,
    margin: 4,
  },
  helpsSegment: {
    justifyContent: 'center',
    marginHorizontal: 6,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
  helpIcon: {
    width: 24,
    height: 24,
  },
  helpsLabel: {
    position: 'absolute',
    bottom: -6,
    fontSize: 11,
    letterSpacing: 2,
    fontWeight: '600',
    color: '#b3b7c9',
  },
});
