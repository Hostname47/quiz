import React, {ReactNode} from 'react';
import {View, StyleSheet, ViewStyle, ViewProps, StyleProp} from 'react-native';
import RNModal from 'react-native-modal';

type ModalProps = {
  onBackButtonPress?: () => void;
  onBackdropPress?: () => void;
  isVisible: boolean;
  children: ReactNode;
  modalViewStyles?: StyleProp<ViewStyle>;
  modalViewProps?: ViewProps;
  testID?: string;
};

const Modal = ({
  onBackButtonPress,
  onBackdropPress,
  isVisible,
  children,
  modalViewStyles,
  modalViewProps,
  testID = undefined,
}: ModalProps) => {
  return (
    <RNModal
      testID={testID}
      useNativeDriver={true}
      isVisible={isVisible}
      onBackdropPress={onBackdropPress}
      onBackButtonPress={onBackButtonPress}>
      <View style={[styles.modalBox, modalViewStyles]} {...modalViewProps}>
        {children}
      </View>
    </RNModal>
  );
};

const styles = StyleSheet.create({
  modalBox: {
    backgroundColor: '#2d3035',
    borderRadius: 4,
    paddingVertical: 18,
    paddingHorizontal: 14,
  },
});

export default Modal;
