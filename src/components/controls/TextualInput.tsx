import {
  StyleSheet,
  TextInput,
  StyleProp,
  TextStyle,
  TextInputProps,
} from 'react-native';
import React, {useEffect, useState} from 'react';

type TextualInputProps = {
  placeholder?: string;
  multiline?: boolean;
  styles?: StyleProp<TextStyle>;
  value: string;
  onChangeText: (value: string) => void;
} & TextInputProps;

const TextualInput = React.forwardRef(
  (
    {
      placeholder = '',
      multiline = false,
      styles = {},
      onChangeText,
      value = '',
      ...props
    }: TextualInputProps,
    ref,
  ) => {
    const [localValue, setLocalValue] = useState<string>(value);

    const handleChange = (v: string) => {
      setLocalValue(v);
      if (onChangeText) {
        onChangeText(v);
      }
    };

    useEffect(() => {
      setLocalValue(value);
    }, [value]);

    return (
      <TextInput
        value={localValue}
        onChangeText={handleChange}
        placeholder={placeholder}
        textAlignVertical={multiline ? 'top' : 'center'}
        style={[
          localstyles.input,
          styles,
          multiline ? localstyles.multiline : {},
        ]}
        multiline={multiline}
        autoCorrect={false}
        autoComplete="off"
        placeholderTextColor="gray"
        selectionColor="#378fbf"
        // ref={ref}
        {...props}
      />
    );
  },
);

const localstyles = StyleSheet.create({
  input: {
    height: 48,
    paddingTop: 0,
    paddingBottom: 0,
    zIndex: 1,
    fontSize: 15,
    paddingHorizontal: 16,
    borderRadius: 4,
    lineHeight: 20,
    backgroundColor: '#42464f',
    color: 'white',
    fontFamily: 'Tajawal Medium',
  },
  multiline: {
    height: 120,
    paddingTop: 12,
    paddingBottom: 12,
    lineHeight: 22,
  },
});

export default TextualInput;
