import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../../theme/theme';

const Button = ({children, onPress}: any) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btn}>
      <Text>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: COLORS.blueColor,
    paddingHorizontal: 20,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
