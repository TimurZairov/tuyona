import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React, {ReactNode} from 'react';
import {COLORS} from '../../theme/theme';

interface IButton {
  children: ReactNode;
  onPress?: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  loading?: boolean;
}

const Button = ({children, onPress, style, textStyle, loading}: IButton) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btn, style]}>
      {loading ? (
        <ActivityIndicator size={16} color={COLORS.mainColor} />
      ) : (
        <Text style={textStyle}>{children}</Text>
      )}
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
