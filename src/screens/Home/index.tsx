import {StyleSheet, Image, View, TouchableOpacity, Text} from 'react-native';
import React, {useState} from 'react';
import GameHeader from '../../partials/GameHeader';
import Txt from '../../components/common/Txt';
import QuestionIcon from '../../components/icons/QuestionIcon';
import ShopIcon from '../../components/icons/ShopIcon';
import Space from '../../components/common/Space';
import GearIcon from '../../components/icons/GearIcon';
import PlayIcon from '../../components/icons/PlayIcon';
import SettingsSection from './SettingsSection';
// import {StackNavigationProps} from '../../utils/types';
import {useAppSelector} from '../../app/hooks';

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
        <QuestionIcon style={styles.titleIcon} />
        <Txt style={styles.title} type="ExtraBold">
          Calisthenics Quiz
        </Txt>
        <QuestionIcon style={styles.titleIcon} />
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
          <Txt type="Bold" style={styles.buttonTitle}>
            Store
          </Txt>
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
          <Txt type="Bold" style={styles.buttonTitle}>
            Settings
          </Txt>
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
        <Txt type="ExtraBold" style={styles.playButtonTitle}>
          Press here to start
        </Txt>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 16,
  },
  title: {
    fontSize: 20,
    letterSpacing: 0.6,
    marginHorizontal: 8,
  },
  titleIcon: {
    width: 24,
    height: 24,
    fill: 'white',
  },
  bootstrapImageContainer: {
    height: 200,
    backgroundColor: 'black',
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: '#484c56',
  },
  bootstrapImage: {
    opacity: 0.4,
    flex: 1,
    width: undefined,
    height: undefined,
  },
  buttonsContainer: {
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 16,
    backgroundColor: '#1a1b1e',
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  buttonIcon: {
    width: 20,
    height: 20,
  },
  buttonTitle: {
    fontSize: 18,
    letterSpacing: 0.6,
    color: '#e3e8ed',
  },
  playButton: {
    marginHorizontal: 12,
    marginBottom: 12,
  },
  playButtonTitle: {
    color: '#4fbeff',
    fontSize: 20,
    letterSpacing: 0.4,
  },
});
