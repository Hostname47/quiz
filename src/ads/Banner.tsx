import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {BannerAd, BannerAdSize, TestIds} from 'react-native-google-mobile-ads';
import NetInfo from '@react-native-community/netinfo';
import {ADMOB_BANNER_UNIT_ID} from '@env';

const adUnitId = __DEV__ ? TestIds.BANNER : ADMOB_BANNER_UNIT_ID;

const Banner = () => {
  const [isConnected, setIsConnected] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected === true);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return isConnected ? (
    <View style={{alignItems: 'center'}}>
      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      />
    </View>
  ) : null;
};

export default Banner;
