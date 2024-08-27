import {StyleSheet, Pressable, TextInput, View, ViewStyle} from 'react-native';
import React, {Dispatch, FC, SetStateAction} from 'react';
import {COLORS, height} from '../../theme/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface IInput {
  placeholder: string;
  isSecured?: boolean;
  setValue?: Dispatch<SetStateAction<string | undefined>>;
  value?: string | undefined;
  inputStyle?: ViewStyle;
}

const Input: FC<IInput> = ({
  placeholder,
  isSecured,
  setValue,
  value,
  inputStyle,
}) => {
  return (
    <View style={[styles.container, inputStyle]}>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={isSecured}
        onChangeText={setValue}
        style={styles.textInput}
        value={value}
      />
      {isSecured && (
        <Pressable>
          <Ionicons name="eye-off" color={COLORS.lightGray} size={20} />
        </Pressable>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: height / 16,
    backgroundColor: COLORS.grayColor,

    paddingHorizontal: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInput: {
    color: COLORS.blackColor,
    flex: 1,
  },
});
