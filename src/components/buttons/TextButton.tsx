import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  StyleProp,
  ViewStyle,
} from 'react-native';

type TextButtonProps = {
  title: string;
  padding?: number;
  styles?: StyleProp<ViewStyle>;
  onPress: () => void;
};

const TextButton = ({
  title,
  padding = 16,
  styles = {},
  onPress,
}: TextButtonProps) => {
  return (
    <TouchableOpacity
      style={[localstyles.button, {padding}, styles]}
      onPress={onPress}
      activeOpacity={0.6}>
      <Text style={localstyles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const localstyles = StyleSheet.create({
  button: {
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#43474f',
  },
  title: {
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 1,
  },
});

export default TextButton;
