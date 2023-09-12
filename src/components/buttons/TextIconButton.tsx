import {
  Text,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React from 'react';
import Space from '../common/Space';

type TextIconButtonProps = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  textSize?: number;
  iconSize?: number;
  padding?: number;
  styles?: StyleProp<ViewStyle>;
  iconFill?: string;
  onPress: () => void;
  primary?: boolean;
};

const TextIconButton = ({
  Icon,
  title,
  styles = {},
  iconSize = 20,
  iconFill = '#e8e8e8',
  textSize = 15,
  padding = 16,
  onPress,
  primary = false,
  ...props
}: TextIconButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        localstyles.button,
        {paddingHorizontal: padding, paddingVertical: padding - 2},
        primary ? localstyles.primary : null,
        styles,
      ]}
      onPress={onPress}
      activeOpacity={0.7}
      {...props}>
      <Icon width={iconSize} height={iconSize} fill={iconFill} />
      <Space distance={6} />
      <Text style={{...localstyles.label, fontSize: textSize}}>{title}</Text>
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
  label: {
    fontWeight: '500',
    letterSpacing: 1,
  },
  primary: {
    backgroundColor: '#419de2',
  },
});

export default TextIconButton;
