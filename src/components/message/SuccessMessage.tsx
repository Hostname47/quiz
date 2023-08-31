import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import InfoIcon from '../icons/InfoIcon';
import XIcon from '../icons/XIcon';
import {styles} from './styles';

type SuccessMessageProps = {
  message: string;
  handleClose: () => void;
};

const SuccessMessage = ({message, handleClose}: SuccessMessageProps) => {
  return (
    <View style={[styles.container, styles.successContainer]}>
      <InfoIcon style={styles.messageIcon} fill="#d7eddc" />
      <Text style={[styles.messageText, styles.successText]}>{message}</Text>
      <TouchableOpacity
        style={[styles.closeButton, styles.successCloseButton]}
        onPress={handleClose}>
        <XIcon style={styles.closeButtonIcon} fill="white" />
      </TouchableOpacity>
    </View>
  );
};

export default SuccessMessage;
