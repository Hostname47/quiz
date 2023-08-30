import React, {useEffect} from 'react';
import {
  InterstitialAd,
  AdEventType,
  TestIds,
} from 'react-native-google-mobile-ads';
import {ADMOB_INTERSTITIAL_UNIT_ID} from '@env';

const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : ADMOB_INTERSTITIAL_UNIT_ID;

/**
 * interval is the interval between showing the ad in milliseconds. For example
 * setting interval = 60000 means we show ad every 6 minutes
 */
const Interstitial = ({counter = 0}: {counter: number}) => {
  useEffect(() => {
    const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
      requestNonPersonalizedAdsOnly: true,
      keywords: ['soccer', 'football', 'sports'],
    });
    interstitial.load();

    const unsubscribe = interstitial.addAdEventListener(
      AdEventType.LOADED,
      () => {
        if (counter > 0) {
          interstitial.show();
        }
      },
    );

    return unsubscribe;
  }, [counter]);

  return null;
};

export default React.memo(Interstitial);
