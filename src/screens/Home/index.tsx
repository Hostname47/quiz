import {StyleSheet, Image, View, TouchableOpacity} from 'react-native';
import React from 'react';
import GameHeader from '../../components/common/GameHeader';
import Txt from '../../components/common/Txt';
import QuestionIcon from '../../components/icons/QuestionIcon';
import ShopIcon from '../../components/icons/ShopIcon';
import Space from '../../components/common/Space';
import GearIcon from '../../components/icons/GearIcon';
import PlayIcon from '../../components/icons/PlayIcon';

const Home = ({navigation}) => {
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
          source={require('../../assets/bootstrap-image.jpg')}
          style={styles.bootstrapImage}
        />
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Shop')}>
          <ShopIcon fill="#e3e8ed" style={styles.buttonIcon} />
          <Space distance={8} />
          <Txt type="Bold" style={styles.buttonTitle}>
            Store
          </Txt>
        </TouchableOpacity>
        <Space distance={12} />
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <GearIcon fill="#e3e8ed" style={styles.buttonIcon} />
          <Space distance={8} />
          <Txt type="Bold" style={styles.buttonTitle}>
            Settings
          </Txt>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[styles.button, styles.playButton]}
        onPress={() => navigation.navigate('Quizzes')}>
        <PlayIcon fill="#4fbeff" style={styles.buttonIcon} />
        <Space distance={12} />
        <Txt type="ExtraBold" style={styles.playButtonTitle}>
          Tap to start
        </Txt>
      </TouchableOpacity>
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
  playButtonTitle: {
    fontSize: 22,
    color: '#4fbeff',
  },
});
