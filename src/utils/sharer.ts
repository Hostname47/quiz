import {Share} from 'react-native';
import {PACKAGE_NAME} from '@env';

export const handleShare = async () => {
  try {
    const result = await Share.share({
      title: 'App link',
      message: `[---] is a great application. I highly  recommend it to you. Link to the app in play store: https://play.google.com/store/apps/details?id=${PACKAGE_NAME}`,
      url: `https://play.google.com/store/apps/details?id=${PACKAGE_NAME}`,
    });

    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {}
};
