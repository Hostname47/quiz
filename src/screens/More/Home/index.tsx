import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import ScreenTitle from '../../../components/ScreenTitle';
import GearIcon from '../../../components/icons/GearIcon';
import AboutIcon from '../../../components/icons/AboutIcon';
import PrivacyIcon from '../../../components/icons/PrivacyIcon';
import TermsIcon from '../../../components/icons/TermsIcon';
import ContactUsIcon from '../../../components/icons/ContactUsIcon';
import ShareIcon from '../../../components/icons/ShareIcon';
import StarIcon from '../../../components/icons/StarIcon';
import Signature from '../../../components/dev-signature/Signature';
import Space from '../../../components/common/Space';

const Home = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ScreenTitle
        title="More about the app"
        Icon={GearIcon}
        handleBack={navigation.goBack}
      />
      <View style={{flex: 1}}>
        <View style={styles.buttonSeaparator} />
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('About')}>
          <AboutIcon style={styles.buttonIcon} />
          <Space distance={6} />
          <Text style={styles.buttonLabel}>About the app</Text>
        </TouchableOpacity>
        <View style={styles.buttonSeaparator} />
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Privacy')}>
          <PrivacyIcon style={styles.buttonIcon} />
          <Space distance={6} />
          <Text style={styles.buttonLabel}>Privacy Policy</Text>
        </TouchableOpacity>
        <View style={styles.buttonSeaparator} />
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Terms')}>
          <TermsIcon style={styles.buttonIcon} />
          <Space distance={6} />
          <Text style={styles.buttonLabel}>Terms and Conditions</Text>
        </TouchableOpacity>
        <View style={styles.buttonSeaparator} />
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Contact')}>
          <ContactUsIcon style={styles.buttonIcon} />
          <Space distance={6} />
          <Text style={styles.buttonLabel}>Contact Us</Text>
        </TouchableOpacity>
        <View style={styles.buttonSeaparator} />
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={() => {}}>
          <ShareIcon style={styles.buttonIcon} />
          <Space distance={6} />
          <Text style={styles.buttonLabel}>Share with friends</Text>
        </TouchableOpacity>
        <View style={styles.buttonSeaparator} />
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={() => {}}>
          <StarIcon style={styles.buttonIcon} />
          <Space distance={6} />
          <Text style={styles.buttonLabel}>Support us with a rate</Text>
        </TouchableOpacity>
        <View style={styles.buttonSeaparator} />
      </View>
      <Signature />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 14,
    // backgroundColor: '#2e3035',
  },
  buttonSeaparator: {
    height: 1,
    width: '100%',
    backgroundColor: '#3f4349',
  },
  buttonIcon: {
    width: 22,
    height: 22,
    fill: '#e8e8e8',
  },
  buttonLabel: {
    fontSize: 17,
    fontWeight: '600',
    letterSpacing: 0.6,
  },
  designedSection: {
    backgroundColor: '#1a1b1e',
    borderTopWidth: 1,
    borderTopColor: '#3f4349',
    marginTop: 'auto',
  },
  copyrightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  copyrightText: {
    fontSize: 12,
    color: '#b0b8c4',
    letterSpacing: 1.3,
  },
  copyrightIcon: {
    fill: '#b0b8c4',
    width: 12,
    height: 12,
    marginHorizontal: 3,
  },
});

export default Home;
