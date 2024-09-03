import React, {FC, memo} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../../theme/theme';

const Label: FC<{value: number; text: string}> = ({
  value,
  text,
  ...restProps
}) => {
  return (
    <View style={styles.root} {...restProps}>
      <Text style={styles.text}>
        {value} {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
  },
  text: {
    fontSize: SIZES.xsmall,
    fontWeight: '200',
    color: COLORS.blackColor,
  },
});

export default memo(Label);
