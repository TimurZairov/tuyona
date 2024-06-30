import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../theme/theme';

const GoBack = ({onPress}: {onPress?: () => void}) => {
  return (
    <Pressable onPress={onPress} style={styles.btn}>
      <Ionicons
        name="chevron-back-outline"
        size={20}
        color={COLORS.blueColor}
      />
    </Pressable>
  );
};

export default GoBack;

const styles = StyleSheet.create({
  btn: {
    padding: 10,
    backgroundColor: COLORS.grayColor,
    borderRadius: 100,
  },
});
