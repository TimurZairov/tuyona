import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {ReactNode} from 'react';
import {COLORS, width} from '../../theme/theme';

interface IButton {
  children: ReactNode;
  onPress?: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  loading?: boolean;
  isRating?: boolean;
}

const Button = ({
  children,
  onPress,
  style,
  textStyle,
  loading,
  isRating,
}: IButton) => {
  return (
    <>
      {isRating ? (
        <TouchableOpacity onPress={onPress} style={[styles.btn, style]}>
          {loading ? (
            <ActivityIndicator size={16} color={COLORS.mainColor} />
          ) : (
            <>{children}</>
          )}
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={onPress} style={[styles.btn, style]}>
          {loading ? (
            <ActivityIndicator size={16} color={COLORS.mainColor} />
          ) : (
            <Text style={textStyle}>{children}</Text>
          )}
        </TouchableOpacity>
      )}
    </>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: COLORS.redColor,
    width: width / 2,
    marginBottom: 10,
    borderRadius: 20,
  },
});
