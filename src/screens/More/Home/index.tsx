import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
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
import {handleShare} from '../../../utils/sharer';
import {PACKAGE_NAME} from '@env';
import Modal from '../../../components/Modal';
import TextIconButton from '../../../components/buttons/TextIconButton';
import TextButton from '../../../components/buttons/TextButton';
import {globalStyles} from '../../../styles/globals';

const Home = ({navigation}: {navigation: any}) => {
  const [rateAppModal, setRateAppModal] = useState(false);

  const rate = async () => {
    const url =
      Platform.OS === 'android'
        ? 'https://play.google.com/store/apps/details?id=' + PACKAGE_NAME
        : 'https://apps.apple.com/us/app/doorhub-driver/id_YOUR_APP_ID';

    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    }

    setRateAppModal(false);
  };

  return (
    <View style={{flex: 1}}>
      <ScreenTitle
        title="More about the app"
        Icon={GearIcon}
        handleBack={navigation.goBack}
      />
      <View style={{flex: 1}}>
        <View style={styles.buttonSeaparator} />
        {/* About the app */}
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('About')}>
          <AboutIcon style={styles.buttonIcon} />
          <Space distance={6} />
          <Text style={styles.buttonLabel}>About the app</Text>
        </TouchableOpacity>
        <View style={styles.buttonSeaparator} />
        {/* Privacy button */}
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Privacy')}>
          <PrivacyIcon style={styles.buttonIcon} />
          <Space distance={6} />
          <Text style={styles.buttonLabel}>Privacy Policy</Text>
        </TouchableOpacity>
        <View style={styles.buttonSeaparator} />
        {/* Terms and conditions button */}
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Terms')}>
          <TermsIcon style={styles.buttonIcon} />
          <Space distance={6} />
          <Text style={styles.buttonLabel}>Terms and Conditions</Text>
        </TouchableOpacity>
        <View style={styles.buttonSeaparator} />
        {/* Contact us button */}
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Contact')}>
          <ContactUsIcon style={styles.buttonIcon} />
          <Space distance={6} />
          <Text style={styles.buttonLabel}>Contact Us</Text>
        </TouchableOpacity>
        <View style={styles.buttonSeaparator} />
        {/* Share the app button */}
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={handleShare}>
          <ShareIcon style={styles.buttonIcon} />
          <Space distance={6} />
          <Text style={styles.buttonLabel}>Share with friends</Text>
        </TouchableOpacity>
        <View style={styles.buttonSeaparator} />
        {/* Rate app button */}
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={() => setRateAppModal(true)}>
          <StarIcon style={styles.buttonIcon} />
          <Space distance={6} />
          <Text style={styles.buttonLabel}>Rate our app</Text>
        </TouchableOpacity>
        <View style={styles.buttonSeaparator} />
      </View>
      <Signature />

      <Modal
        isVisible={rateAppModal}
        onBackdropPress={() => setRateAppModal(false)}
        onBackButtonPress={() => setRateAppModal(false)}>
        <View style={styles.rowCenter}>
          <StarIcon style={styles.titleIcon} fill="#4fbeff" />
          <Space distance={4} />
          <Text style={[styles.title, styles.blue]}>Rate our application</Text>
        </View>
        <Space vertical distance={10} />
        <Text style={styles.text}>
          Your app store review keeps us motivated and shows interest and
          support to keep working and maintaining this app.
        </Text>
        <Space vertical distance={8} />
        <Text style={styles.text}>
          We'd love to know what you think about this app and any feedback you
          can suggest to make this app even better.
        </Text>
        <Space vertical distance={8} />

        <View
          style={[
            styles.rowCenter,
            {justifyContent: 'center', marginTop: 'auto'},
          ]}>
          <TextButton
            title="Maybe later"
            onPress={() => setRateAppModal(false)}
            styles={{flex: 1}}
          />
          <Space distance={8} />
          <TextIconButton
            title="Rate us"
            Icon={StarIcon}
            onPress={rate}
            primary
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  ...globalStyles,
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
