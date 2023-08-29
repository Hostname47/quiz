import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import React from 'react';
import Space from './common/Space';
import LeftArrow from './icons/LeftArrow';

type ScreenTitleProps = {
  Icon: React.ComponentType<any>;
  title: string;
  hasBack?: boolean;
  handleBack?: () => void;
  HeaderRight?: JSX.Element;
};

const ScreenTitle = ({
  Icon,
  title,
  hasBack = true,
  handleBack = () => {},
  HeaderRight,
}: ScreenTitleProps) => {
  return (
    <View style={styles.header}>
      <View style={styles.titleBox}>
        {hasBack && (
          <>
            <TouchableHighlight
              underlayColor="#3f4349"
              onPress={handleBack}
              style={styles.backButton}>
              <LeftArrow style={styles.backButtonIcon} />
            </TouchableHighlight>
            <Space distance={6} />
          </>
        )}
        <View style={styles.titleContainer}>
          {Icon && <Icon style={styles.screenTitleIcon} />}
          <Text style={styles.screenTitle}>{title}</Text>
        </View>
      </View>
      <Space distance={6} />
      {HeaderRight}
    </View>
  );
};

const styles = StyleSheet.create({
  backButton: {
    width: 46,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
  },
  backButtonReversed: {
    transform: [{rotate: '180deg'}],
  },
  backButtonIcon: {
    width: 19,
    height: 19,
    fill: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 6,
    height: 52,
  },
  titleBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  screenTitle: {
    fontSize: 17,
    fontWeight: '600',
    letterSpacing: 0.4,
    // color: '#3fbfff',
    marginHorizontal: 8,
  },
  screenTitleIcon: {
    width: 22,
    height: 22,
    // fill: '#3fbfff',
    fill: '#e8e8e8',
  },
  reversed: {
    flexDirection: 'row-reverse',
  },
});

export default ScreenTitle;
