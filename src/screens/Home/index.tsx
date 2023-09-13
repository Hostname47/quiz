import {StyleSheet, Image, View, TouchableOpacity, Text} from 'react-native';
import React, {useState} from 'react';
import GameHeader from '../../partials/GameHeader';
import ShopIcon from '../../components/icons/ShopIcon';
import Space from '../../components/common/Space';
import GearIcon from '../../components/icons/GearIcon';
import PlayIcon from '../../components/icons/PlayIcon';
import SettingsSection from './SettingsSection';
// import {StackNavigationProps} from '../../utils/types';
import {useAppSelector} from '../../app/hooks';
import {APP_NAME} from '@env';
import LeftFeather from '../../components/icons/Feather';

/**
 * We'll enable typing later
 */
// const Home = ({navigation}: StackNavigationProps) => {
const Home = ({navigation}: {navigation: any}) => {
  const game = useAppSelector(state => state.game);
  const [settingsState, setSettingsState] = useState(false);

  const openSettings = () => {
    setSettingsState(true);
  };
  const closeSettings = () => {
    setSettingsState(false);
  };

  return (
    <View style={styles.container}>
      <GameHeader />
      <View style={styles.titleContainer}>
        <View style={styles.titleBox}>
          <LeftFeather width={16} height={16} fill="white" />
          <Text style={styles.title}>{APP_NAME}</Text>
          <LeftFeather
            width={16}
            height={16}
            fill="white"
            style={{transform: [{rotateY: '180deg'}]}}
          />
        </View>
        <Text style={styles.subtitle}>
          Test Your Calisthenics Knowledge with Calisthenics Quiz
        </Text>
      </View>

      <View style={styles.bootstrapImageContainer}>
        <Image
          accessibilityHint="Welcome image that shows in home screen"
          source={require('../../assets/bootstrap-image.jpg')}
          style={styles.bootstrapImage}
        />
      </View>

      <View style={styles.buttonsContainer}>
        {/* Store button */}
        <TouchableOpacity
          disabled={!game.initialized}
          testID="shop-button"
          style={styles.button}
          onPress={() => navigation.navigate('Shop')}
          activeOpacity={0.5}>
          <ShopIcon fill="#e3e8ed" style={styles.buttonIcon} />
          <Space distance={8} />
          <Text style={styles.buttonTitle}>Store</Text>
        </TouchableOpacity>
        <Space distance={12} />
        {/* Settings button */}
        <TouchableOpacity
          disabled={!game.initialized}
          testID="settings-button"
          style={styles.button}
          onPress={openSettings}
          activeOpacity={0.5}>
          <GearIcon fill="#e3e8ed" style={styles.buttonIcon} />
          <Space distance={8} />
          <Text style={styles.buttonTitle}>Settings</Text>
        </TouchableOpacity>
      </View>
      {/* Play button */}
      <TouchableOpacity
        disabled={!game.initialized}
        testID="play-button"
        style={[styles.button, styles.playButton]}
        onPress={() => navigation.navigate('QuizzesMap')}
        activeOpacity={0.5}>
        <PlayIcon fill="#4fbeff" style={styles.buttonIcon} />
        <Space distance={12} />
        <Text style={styles.playButtonTitle}>Press Here To Start</Text>
      </TouchableOpacity>

      <SettingsSection
        settingsState={settingsState}
        closeSettings={closeSettings}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 16,
  },
  titleBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 1.6,
    marginHorizontal: 8,
  },
  subtitle: {
    textAlign: 'center',
    paddingHorizontal: 20,
    marginTop: 6,
    letterSpacing: 1,
    lineHeight: 20,
    fontSize: 13,
  },
  bootstrapImageContainer: {
    height: 180,
    backgroundColor: 'black',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#484c56',
  },
  bootstrapImage: {
    opacity: 0.9,
    flex: 1,
    width: undefined,
    height: undefined,
  },
  buttonsContainer: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    paddingVertical: 14,
    backgroundColor: '#1a1b1e',
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  buttonIcon: {
    width: 19,
    height: 19,
  },
  buttonTitle: {
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.6,
    color: '#e3e8ed',
  },
  playButton: {
    marginHorizontal: 12,
    marginBottom: 12,
  },
  playButtonTitle: {
    color: '#4fbeff',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 1,
  },
});
