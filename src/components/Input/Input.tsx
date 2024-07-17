import {StyleSheet, Pressable, TextInput, View} from 'react-native';
import React, {Dispatch, SetStateAction} from 'react';
import {COLORS, height} from '../../theme/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface IInput {
  placeholder: string;
  isSecured?: boolean;
  setValue?: Dispatch<SetStateAction<string>>;
}

const Input = ({placeholder, isSecured, setValue}: IInput) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={isSecured}
        onChangeText={setValue}
        style={styles.textInput}
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
  },
});
