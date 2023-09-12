import {View, TouchableOpacity, Linking, StyleSheet} from 'react-native';
import React, {useRef} from 'react';
import CopyrightIcon from '../icons/CopyrightIcon';
import Heart from './Heart';
import Txt from '../common/Txt';

const PORTFOLIO_LINK = 'https://your-website.com/';

const DevSignature = () => {
  const lock = useRef<boolean>(true);
  const goToPortfolio = async () => {
    if (!lock.current) {
      return;
    }
    lock.current = false;

    const supported = await Linking.canOpenURL(PORTFOLIO_LINK);
    if (supported) {
      await Linking.openURL(PORTFOLIO_LINK);
    }

    lock.current = true;
  };

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.designedSection}
      onPress={goToPortfolio}>
      <View style={styles.designBy}>
        <Txt type="Bold" style={styles.designByFragment}>
          Designed with
        </Txt>
        <Heart />
        <Txt type="Bold" style={styles.designByFragment}>
          by
        </Txt>
        <Txt type="ExtraBold" style={styles.designer}>
          [your name]
        </Txt>
      </View>
      <View style={styles.copyrightContainer}>
        <Txt style={styles.copyrightText}>Copyright</Txt>
        <CopyrightIcon style={styles.copyrightIcon} />
        <Txt style={styles.copyrightText}>202x - All rights reserved</Txt>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  designedSection: {
    paddingVertical: 24,
    // backgroundColor: '#202226',
    borderTopWidth: 1,
    borderTopColor: '#3f4349',
    marginTop: 'auto',
  },
  designBy: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  designByFragment: {
    fontSize: 14,
    color: '#dee3ea',
    letterSpacing: 1.4,
  },
  designer: {
    marginLeft: 4,
    fontSize: 16,
    color: '#36baf7',
    letterSpacing: 1.4,
  },
  copyrightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  copyrightText: {
    fontSize: 13,
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

export default DevSignature;
