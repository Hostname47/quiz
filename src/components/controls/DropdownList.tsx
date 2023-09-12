import {
  View,
  Text,
  FlatList,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import ArrowIcon from '../icons/ArrowIcon';
import {DropdownOptionType} from './types';

type DropdownListProps = {
  label?: string;
  textSize?: number;
  iconSize?: number;
  padding?: number;
  labelStyles?: StyleProp<ViewStyle>;
  buttonStyles?: StyleProp<ViewStyle>;
  buttonTitleStyles?: StyleProp<ViewStyle>;
  dropDownBoxStyles?: StyleProp<ViewStyle>;
  optionBoxStyles?: StyleProp<ViewStyle>;
  optionStyles?: StyleProp<ViewStyle>;
  dropDownTop?: number;
  options: DropdownOptionType[];
  value?: string;
  onChange: (option: string) => void;
};

const DropdownList = ({
  label,
  labelStyles,
  buttonStyles,
  buttonTitleStyles,
  dropDownBoxStyles,
  dropDownTop,
  options,
  optionBoxStyles,
  optionStyles,
  value = '',
  onChange,
}: DropdownListProps) => {
  const [currentLabel, setCurrentLabel] = useState<string>('');

  const handleOptionSelect = (option: DropdownOptionType) => {
    if (onChange) {
      onChange(option.value);
    }
    setCurrentLabel(option.value);
  };

  useEffect(() => {
    const v = value ? value : options[0].value;
    setCurrentLabel(v);
  }, [value, options]);

  return (
    <View>
      {label && <Text style={[styles.label, labelStyles]}>{label}</Text>}
      <Menu>
        <MenuTrigger style={[styles.button, buttonStyles]}>
          <Text style={[styles.buttonTitle, buttonTitleStyles]}>
            {currentLabel}
          </Text>
          <ArrowIcon style={styles.dropdownArrow} />
        </MenuTrigger>
        <MenuOptions
          customStyles={{
            optionsContainer: [
              {marginTop: dropDownTop},
              styles.dropdownBox,
              dropDownBoxStyles,
            ],
          }}>
          <FlatList
            data={options}
            renderItem={({item: option}) => (
              <MenuOption
                disabled={option.disabled}
                onSelect={() => handleOptionSelect(option)}
                style={[styles.optionBox, optionBoxStyles]}>
                <Text
                  style={[optionStyles, option.disabled && {color: 'gray'}]}>
                  {option.value}
                </Text>
              </MenuOption>
            )}
          />
        </MenuOptions>
      </Menu>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#43474f',
    borderRadius: 3,
  },
  dropdownArrow: {
    height: 14,
    width: 14,
    fill: 'white',
    transform: [{rotate: '90deg'}],
  },
  label: {
    letterSpacing: 0.4,
    fontSize: 15,
    marginBottom: 6,
  },
  buttonTitle: {
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0.4,
  },
  dropdownBox: {
    backgroundColor: '#151719',
    borderRadius: 3,
  },
  optionBox: {
    padding: 10,
  },
  buttonUnderline: {
    height: 1,
    marginVertical: 2,
    width: '100%',
    backgroundColor: '#31353a',
  },
});

export default DropdownList;
