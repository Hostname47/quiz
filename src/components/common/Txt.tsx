import {Text, StyleProp, TextStyle, TextProps} from 'react-native';
import React, {ForwardedRef} from 'react';

type CustomTextProps = {
  children: string;
  type?: 'Light' | 'ExtraLight' | 'Regular' | 'Medium' | 'Bold' | 'ExtraBold';
  style?: StyleProp<TextStyle>;
  props?: TextProps;
};

const Txt = React.forwardRef<Text, CustomTextProps>(
  (
    {children, type = 'Medium', style, ...props}: CustomTextProps,
    ref: ForwardedRef<Text> | undefined,
  ) => {
    return (
      <Text
        ref={ref}
        style={[{fontFamily: `Tajawal ${type}`}, style]}
        {...props}>
        {children}
      </Text>
    );
  },
);

export default Txt;
