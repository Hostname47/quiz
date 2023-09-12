import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import WebView from 'react-native-webview';
import NetInfo from '@react-native-community/netinfo';
import ScreenTitle from '../../../components/ScreenTitle';
import PrivacyIcon from '../../../components/icons/PrivacyIcon';
import RocketIcon from '../../../components/icons/RocketIcon';
import {globalStyles} from '../../../styles/globals';
import Space from '../../../components/common/Space';

const PATH_TO_PRIVACY_POLICY =
  'https://website.com/apps/quiz/privacy-policy.html';

const Privacy = ({navigation}: {navigation: any}) => {
  const [state, setState] = useState<boolean | null>(null);

  useEffect(() => {
    return NetInfo.addEventListener(s => {
      setState(s.isInternetReachable);
    });
  }, []);

  return (
    <View style={{flex: 1}}>
      <ScreenTitle
        title="Privacy Policy"
        Icon={PrivacyIcon}
        handleBack={navigation.goBack}
      />

      {state === null ? null : state ? (
        <WebView
          source={{
            uri: PATH_TO_PRIVACY_POLICY,
          }}
        />
      ) : (
        <View style={[globalStyles.centeredSection, {paddingHorizontal: 30}]}>
          <RocketIcon width={46} height={46} fill="white" />
          <Space vertical distance={8} />
          <Text style={[globalStyles.title, {letterSpacing: 0.8}]}>
            No internet
          </Text>
          <Space vertical distance={8} />
          <Text style={[globalStyles.text, globalStyles.textCenter]}>
            A connection to the internet is required to access this page. Please
            make sure your internet connection is reachable and try again.
          </Text>
        </View>
      )}
    </View>
  );
};

export default Privacy;
