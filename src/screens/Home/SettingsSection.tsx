import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Modal from '../../components/Modal';
import Txt from '../../components/common/Txt';
import MusicIcon from '../../components/icons/MusicIcon';
import XIcon from '../../components/icons/XIcon';
import Space from '../../components/common/Space';
import AppsIcon from '../../components/icons/AppsIcon';

type SettingsSectionProps = {
  settingsState: boolean;
  closeSettings: () => void;
};

const SettingsSection = ({
  settingsState,
  closeSettings,
}: SettingsSectionProps) => {
  return (
    <Modal
      testID="settings-modal"
      isVisible={settingsState}
      onBackButtonPress={closeSettings}
      onBackdropPress={closeSettings}>
      <TouchableOpacity
        style={styles.closeButton}
        onPress={closeSettings}
        accessibilityHint="Close settings">
        <XIcon style={styles.closeIcon} />
      </TouchableOpacity>
      <View
        style={styles.settingsSegmentsBox}
        accessibilityHint="Settings modal container">
        <View style={styles.settingsSegment}>
          <TouchableOpacity style={styles.settingsButton}>
            <MusicIcon style={styles.settingsButtonIcon} />
            <View style={styles.noMusicLine} />
          </TouchableOpacity>
          <Txt type="Bold" style={styles.settingsButtonTitle}>
            Music
          </Txt>
        </View>
        <Space distance={40} />
        <View style={styles.settingsSegment}>
          <TouchableOpacity style={styles.settingsButton}>
            <AppsIcon style={styles.settingsButtonIcon} />
          </TouchableOpacity>
          <Txt type="Bold" style={styles.settingsButtonTitle}>
            More
          </Txt>
        </View>
      </View>
    </Modal>
  );
};

export default SettingsSection;

const styles = StyleSheet.create({
  settingsSegmentsBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 46,
    marginBottom: 32,
  },
  settingsSegment: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingsButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
    borderRadius: 80,
    backgroundColor: '#6e7a82',
  },
  settingsButtonIcon: {
    width: 34,
    height: 34,
    fill: 'white',
  },
  settingsButtonTitle: {
    marginTop: 6,
    fontSize: 18,
  },
  noMusicLine: {
    position: 'absolute',
    height: 50,
    width: 5,
    borderRadius: 3,
    backgroundColor: '#2d3035',
    transform: [{rotate: '45deg'}],
  },
  closeButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 20,
  },
  closeIcon: {
    width: 20,
    height: 20,
    fill: 'white',
  },
});