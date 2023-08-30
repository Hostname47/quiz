import React, {useEffect} from 'react';
import {
  RewardedAd,
  RewardedAdEventType,
  TestIds,
} from 'react-native-google-mobile-ads';
import {ADMOB_REWARDED_UNIT_ID} from '@env';
import {keywords} from './constants';

const rewardedAdId = __DEV__ ? TestIds.REWARDED : ADMOB_REWARDED_UNIT_ID;

type RewardedProps = {
  counter?: number;
  rewardUser: (amount: number) => Promise<void>;
};

const Rewarded = ({counter = 0, rewardUser}: RewardedProps) => {
  useEffect(() => {
    const rewarded = RewardedAd.createForAdRequest(rewardedAdId, {
      requestNonPersonalizedAdsOnly: true,
      keywords: keywords,
    });

    rewarded.load();

    const unsubscribeLoaded = rewarded.addAdEventListener(
      RewardedAdEventType.LOADED,
      () => {
        if (counter > 0) {
          rewarded.show();
        }
      },
    );

    const unsubscribeEearned = rewarded.addAdEventListener(
      RewardedAdEventType.EARNED_REWARD,
      reward => {
        rewardUser(reward.amount);
      },
    );

    return () => {
      unsubscribeLoaded();
      unsubscribeEearned();
    };
  }, [counter]);

  return null;
};

export default React.memo(Rewarded);
