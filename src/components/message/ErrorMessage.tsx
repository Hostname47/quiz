import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import InfoIcon from '../icons/InfoIcon';
import XIcon from '../icons/XIcon';
import {styles} from './styles';

type ErrorMessageProps = {
  error: string;
  handleClose: () => void;
};

const ErrorMessage = ({error, handleClose}: ErrorMessageProps) => {
  return (
    <View style={[styles.errorContainer, styles.container]}>
      <InfoIcon style={styles.messageIcon} fill="#f7dede" />
      <Text style={[styles.messageText, styles.errorText]}>{error}</Text>
      <TouchableOpacity
        style={[styles.closeButton, styles.errorCloseButton]}
        onPress={handleClose}>
        <XIcon style={styles.closeButtonIcon} fill="white" />
      </TouchableOpacity>
    </View>
  );
};

export default ErrorMessage;
