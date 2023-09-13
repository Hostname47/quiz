import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import MenuIcon from '../components/icons/MenuIcon';
import {StackNavigation} from '../utils/types';
import {APP_NAME} from '@env';

const Header = () => {
  const {navigate} = useNavigation<StackNavigation>();

  return (
    <View style={styles.container} testID="header">
      <View style={styles.logoBox}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <View style={styles.logoTextBox}>
          <Text style={styles.logoText}>{APP_NAME.toUpperCase()}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigate('More')}>
        <MenuIcon style={styles.menuButtonIcon} fill="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 54,
    backgroundColor: '#1a1b1e',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#32353a',
  },
  menuButton: {
    width: 66,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuButtonIcon: {
    width: 26,
    height: 26,
  },
  logoBox: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  logo: {
    width: 36,
    height: 36,
    backgroundColor: 'white',
    borderRadius: 4,
  },
  logoTextBox: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 36,
    paddingHorizontal: 12,
    marginLeft: 8,
    borderRadius: 4,
    backgroundColor: 'white',
  },
  logoText: {
    letterSpacing: 1.4,
    color: 'black',
    fontSize: 13,
    fontWeight: '800',
  },
});

export default React.memo(Header);
