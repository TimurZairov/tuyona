import {StyleSheet, Pressable, TextInput, View, ViewStyle} from 'react-native';
import React, {Dispatch, FC, SetStateAction} from 'react';
import {COLORS, height} from '../../theme/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import useAuth from '../../common/hooks/useAuth';

interface IInput {
  placeholder: string;
  setValue?: Dispatch<SetStateAction<string | undefined>>;
  value?: string | undefined;
  inputStyle?: ViewStyle;
  isPass?: boolean;
}

const Input: FC<IInput> = ({
  placeholder,
  setValue,
  value,
  inputStyle,
  isPass,
}) => {
  const {disableSecuredInput, isSecured} = useAuth();

  return (
    <View style={[styles.container, inputStyle]}>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={isPass ? isSecured : undefined}
        onChangeText={setValue}
        style={styles.textInput}
        value={value}
      />

      {isPass && (
        <Pressable onPress={disableSecuredInput}>
          {isSecured ? (
            <Ionicons name="eye-off" color={COLORS.lightGray} size={20} />
          ) : (
            <Ionicons name="eye" color={COLORS.lightGray} size={20} />
          )}
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
