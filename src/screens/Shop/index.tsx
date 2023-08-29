import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import React, {useRef} from 'react';
import GameHeader from '../../partials/GameHeader';
import ScreenTitle from '../../components/ScreenTitle';
import ShopIcon from '../../components/icons/ShopIcon';
import Txt from '../../components/common/Txt';
import DollarIcon from '../../components/icons/DollarIcon';
import RightArrow from '../../components/icons/RightArrow';
import Space from '../../components/common/Space';
import PlayIcon from '../../components/icons/PlayIcon';
import HeartIcon from '../../components/icons/HeartIcon';
import HelpIcon from '../../components/icons/HelpIcon';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {buyLives, buyHelps} from '../../features/game/gameSlice';
import {
  HELPS_NUMBER_TO_BUY,
  HELPS_PRICE,
  LIVES_NUMBER_TO_BUY,
  LIVES_PRICE,
} from '../../utils/constants';

const Shop = ({navigation}: {navigation: any}) => {
  const game = useAppSelector(state => state.game);
  const dispatch = useAppDispatch();
  const lock = useRef(true);

  const buyHearts = async () => {
    if (!game.initialized || !lock.current) {
      return;
    }
    lock.current = false;

    try {
      if (game.money >= LIVES_PRICE) {
        const userGame = await AsyncStorage.getItem('game');
        const userGameObject = JSON.parse(userGame);
        userGameObject.lives = userGameObject.lives + LIVES_NUMBER_TO_BUY;
        userGameObject.money = userGameObject.money - LIVES_PRICE;
        await AsyncStorage.setItem('game', JSON.stringify(userGameObject));

        dispatch(buyLives());
      }
    } catch (error) {
      // Show an error as toast notification
    } finally {
      lock.current = true;
    }
  };

  const buyHelpings = async () => {
    if (!game.initialized || !lock.current) {
      return;
    }
    lock.current = false;

    try {
      if (game.money >= LIVES_PRICE) {
        const userGame = await AsyncStorage.getItem('game');
        const userGameObject = JSON.parse(userGame);
        userGameObject.helps += HELPS_NUMBER_TO_BUY;
        userGameObject.money -= HELPS_PRICE;
        await AsyncStorage.setItem('game', JSON.stringify(userGameObject));

        dispatch(buyHelps());
      }
    } catch (error) {
      // Show an error as toast notification
    } finally {
      lock.current = true;
    }
  };

  return (
    <View style={styles.container}>
      <GameHeader />
      <Space vertical distance={6} />
      <ScreenTitle
        title="Shop"
        Icon={ShopIcon}
        handleBack={navigation.goBack}
      />

      <View style={styles.bodyContainer}>
        <View style={styles.noticeBox}>
          <Text style={styles.notice}>
            You also get +5
            <View>
              <DollarIcon style={styles.inlineCurrency} fill="#6cdd6e" />
            </View>{' '}
            <Text>on each level you pass</Text>
          </Text>
        </View>
        <View style={styles.body}>
          <View style={styles.segment}>
            <Txt type="Bold" style={styles.value}>
              +10
            </Txt>
            <DollarIcon style={styles.leftIcon} fill="#6cdd6e" />
            <RightArrow style={styles.arrow} fill="#a4b3bc" />
            <TouchableOpacity style={styles.button}>
              <PlayIcon style={styles.adWatchIcon} fill="#4fbeff" />
              <Space distance={6} />
              <Text style={styles.buttonTitle}>FREE</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.textSeparator}>- - - - -</Text>
          <View style={styles.segment}>
            <Txt type="Bold" style={styles.value}>
              +3
            </Txt>
            <HeartIcon style={styles.leftIcon} fill="#ff5656" />
            <RightArrow style={styles.arrow} fill="#a4b3bc" />

            <TouchableOpacity style={styles.button} onPress={buyHearts}>
              <Text style={styles.price}>60</Text>
              <Space distance={6} />
              <DollarIcon style={styles.currency} fill="#6cdd6e" />
            </TouchableOpacity>
          </View>
          <Space vertical distance={12} />
          <View style={styles.segment}>
            <Txt type="Bold" style={styles.value}>
              +3
            </Txt>
            <HelpIcon style={styles.leftIcon} fill="#ede43b" />
            <RightArrow style={styles.arrow} fill="#a4b3bc" />

            <TouchableOpacity style={styles.button} onPress={buyHelpings}>
              <Text style={styles.price}>40</Text>
              <Space distance={6} />
              <DollarIcon style={styles.currency} fill="#6cdd6e" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Shop;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bodyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    alignItems: 'flex-end',
    marginTop: 16,
  },
  segment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  value: {
    fontSize: 30,
    letterSpacing: 1,
  },
  leftIcon: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  arrow: {
    width: 26,
    height: 26,
    marginHorizontal: 12,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    backgroundColor: '#121314',
    borderWidth: 1,
    borderColor: '#3b3e47',
    borderRadius: 6,
    width: 120,
  },
  adWatchIcon: {
    width: 16,
    height: 16,
  },
  buttonTitle: {
    fontSize: 15,
    letterSpacing: 1,
    color: '#4fbeff',
    fontWeight: '800',
  },
  textSeparator: {
    alignSelf: 'center',
    letterSpacing: 3,
    marginVertical: 16,
    color: '#a4b3bc',
  },
  price: {
    fontSize: 22,
    fontWeight: '800',
    letterSpacing: 1,
  },
  currency: {
    width: 28,
    height: 28,
  },
  inlineCurrency: {
    width: 18,
    height: 18,
    marginBottom: -4,
  },
  noticeBox: {
    padding: 12,
    backgroundColor: '#373a42',
    borderRadius: 6,
  },
  notice: {
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 26,
    fontWeight: '600',
  },
});
