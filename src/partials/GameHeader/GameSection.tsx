import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DollarIcon from '../../components/icons/DollarIcon';
import {useAppSelector} from '../../app/hooks';
import PlusIcon from '../../components/icons/PlusIcon';
import HeartIcon from '../../components/icons/HeartIcon';
import HelpIcon from '../../components/icons/HelpIcon';
import {useNavigation} from '@react-navigation/native';

const GameSection = () => {
  const {navigate} = useNavigation();
  const game = useAppSelector(state => state.game);

  const goToShop = () => {
    navigate('Shop');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.segment}
        activeOpacity={0.5}
        onPress={goToShop}>
        <DollarIcon style={styles.segmentIcon} fill="#6cdd6e" />
        <Text style={styles.segmentValue}>
          {game.initialized ? game.money : '-'}
        </Text>
        <PlusIcon style={styles.plusIcon} fill="#6cdd6e" />
      </TouchableOpacity>
      <View style={[styles.segment, styles.helpsSegment]}>
        <HelpIcon
          style={[styles.segmentIcon, styles.helpIcon]}
          fill="#ede43b"
        />
        <Text style={styles.segmentValue}>
          {game.initialized ? game.helps : '-'}
        </Text>
        <Text style={styles.helpsLabel}>help</Text>
      </View>
      <TouchableOpacity
        style={styles.segment}
        activeOpacity={0.5}
        onPress={goToShop}>
        <HeartIcon style={styles.segmentIcon} fill="#ff5656" />
        <Text style={styles.segmentValue}>
          {game.initialized ? game.lives : '-'}
        </Text>
        <PlusIcon style={styles.plusIcon} fill="#ff5656" />
      </TouchableOpacity>
    </View>
  );
};

export default GameSection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  segment: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2b2d33',
    padding: 6,
    borderRadius: 50,
  },
  segmentIcon: {
    width: 24,
    height: 24,
  },
  segmentValue: {
    fontFamily: 'Tajawal Bold',
    fontSize: 17,
    fontWeight: '600',
    marginLeft: 4,
  },
  plusIcon: {
    width: 14,
    height: 14,
    margin: 4,
  },
  helpsSegment: {
    justifyContent: 'center',
    marginHorizontal: 4,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
  helpIcon: {
    width: 22,
    height: 22,
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
