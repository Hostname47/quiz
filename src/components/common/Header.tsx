import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
// import LogoText from '../icons/LogoText';
// import Logo from '../icons/Logo';
import MenuIcon from '../icons/MenuIcon';
import {StackNavigation} from '../../utils/types';

const Header = () => {
  const {navigate} = useNavigation<StackNavigation>();

  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <View style={styles.logoTextContainer}>
          {/* <Logo style={styles.logo} fill="white" />
          <LogoText style={styles.logoText} fill="white" /> */}
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
  logoBox: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    paddingHorizontal: 14,
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
  // current: {
  //   fill: '#60caff',
  // },
  logo: {
    width: 34,
    height: 34,
  },
  logoTextContainer: {
    marginHorizontal: 6,
    padding: 6,
    backgroundColor: 'white',
    borderRadius: 4,
  },
  logoText: {
    marginHorizontal: 8,
    height: 28,
    width: 100,
  },
});

export default React.memo(Header);
