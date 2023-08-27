import {StyleSheet, Image, View, TouchableOpacity, Text} from 'react-native';
import React, {useState} from 'react';
import GameHeader from '../../partials/GameHeader';
import Txt from '../../components/common/Txt';
import QuestionIcon from '../../components/icons/QuestionIcon';
import ShopIcon from '../../components/icons/ShopIcon';
import Space from '../../components/common/Space';
import GearIcon from '../../components/icons/GearIcon';
import PlayIcon from '../../components/icons/PlayIcon';
import Modal from '../../components/Modal';
import MusicIcon from '../../components/icons/MusicIcon';
import AppsIcon from '../../components/icons/AppsIcon';
// import {StackNavigationProps} from '../../utils/types';

/**
 * We'll enable typing later
 */
// const Home = ({navigation}: StackNavigationProps) => {
const Home = ({navigation}: {navigation: any}) => {
  const [settingsState, setSettingsState] = useState(true);

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
        <TouchableOpacity
          accessibilityHint="Shop button to go to shop screen"
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
        <TouchableOpacity
          style={styles.button}
          onPress={() => {}}
          activeOpacity={0.5}>
          <GearIcon fill="#e3e8ed" style={styles.buttonIcon} />
          <Space distance={8} />
          <Txt type="Bold" style={styles.buttonTitle}>
            Settings
          </Txt>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        accessibilityHint="Press here to start"
        style={[styles.button, styles.playButton]}
        onPress={() => navigation.navigate('Quizzes')}
        activeOpacity={0.5}>
        <PlayIcon fill="#4fbeff" style={styles.buttonIcon} />
        <Space distance={12} />
        <Txt type="ExtraBold" style={styles.playButtonTitle}>
          Press here to start
        </Txt>
      </TouchableOpacity>

      <Modal
        testID="settings-modal"
        isVisible={true}
        onBackButtonPress={() => setSettingsState(false)}
        onBackdropPress={() => setSettingsState(false)}>
        <View style={styles.settingsSegmentsBox}>
          <View style={styles.settingsSegment}>
            <View style={styles.settingsButton}>
              <MusicIcon style={styles.settingsButtonIcon} />
            </View>
            <Txt type="Bold" style={styles.settingsButtonTitle}>
              Music
            </Txt>
          </View>
          <Space distance={40} />
          <TouchableOpacity style={styles.settingsSegment}>
            <View style={styles.settingsButton}>
              <AppsIcon style={styles.settingsButtonIcon} />
            </View>
            <Txt type="Bold" style={styles.settingsButtonTitle}>
              More
            </Txt>
          </TouchableOpacity>
        </View>
      </Modal>
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
    letterSpacing: 2,
    color: '#e3e8ed',
  },
  playButton: {
    marginHorizontal: 12,
    marginBottom: 12,
  },
  settingsSegmentsBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 36,
    marginBottom: 22,
  },
  settingsSegment: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingsButton: {
    padding: 18,
    borderRadius: 80,
    backgroundColor: '#7c8c96',
  },
  settingsButtonIcon: {
    width: 34,
    height: 34,
    fill: 'white',
  },
  settingsButtonTitle: {
    marginTop: 6,
    fontSize: 18,
  },
});
