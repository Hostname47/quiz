import {
  StyleSheet,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import Txt from '../../../components/common/Txt';
import LockIcon from '../../../components/icons/LockIcon';
import {useNavigation} from '@react-navigation/native';

type LevelButtonProps = {
  level: number;
  currentUserLevel: number;
};

const LevelButton = ({level, currentUserLevel}: LevelButtonProps) => {
  const {navigate} = useNavigation();
  const {width} = useWindowDimensions();
  const playable = currentUserLevel >= level;

  const play = () => {
    if (playable) {
      navigate('QuizPlayer', {
        level,
      });
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {marginLeft: Math.random() * (width - 80 - 120)},
      ]}
      disabled={!playable}
      activeOpacity={0.5}
      onPress={play}>
      <Txt type="ExtraBold" style={styles.level}>
        {'level: ' + level.toString()}
      </Txt>
      {currentUserLevel < level && (
        <View style={styles.lockContainer}>
          <LockIcon style={styles.lockIcon} />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default React.memo(LevelButton);

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 50,
    backgroundColor: '#1a1b1e',
    marginVertical: 12,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  level: {
    fontSize: 18,
  },
  blue: {
    color: '#4fbeff',
  },
  lockContainer: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1a1b1eee',
  },
  lockIcon: {
    width: 24,
    height: 24,
    fill: '#b3c9d3',
  },
});
