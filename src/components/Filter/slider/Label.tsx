import React, {FC, memo} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../../theme/theme';

const Label: FC<{text: number}> = ({text, ...restProps}) => {
  return (
    <View style={styles.root} {...restProps}>
      <Text style={styles.text}>{text} лет</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
  },
  text: {
    fontSize: SIZES.small,
    color: COLORS.blackColor,
  },
});

export default memo(Label);
