import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../theme/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface ILoginSettings {
  item: {
    icon: React.JSX.Element;
    text: string;
  };
  index: number;
  length?: number;
}

const LoginSettings = ({item, index, length}: ILoginSettings) => {
  console.log(length);
  return (
    <>
      <View style={styles.container}>
        <View style={styles.icon}>{item.icon}</View>
        <Text>{item.text}</Text>
        <Ionicons
          name="chevron-forward-outline"
          size={20}
          color={COLORS.lightGray}
          style={styles.iconSet}
        />
      </View>
      {index + 1 === length ? null : <View style={styles.divider} />}
    </>
  );
};

export default LoginSettings;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    padding: 6,
    backgroundColor: COLORS.grayColor,
    borderRadius: 4,
    marginRight: 10,
  },
  iconSet: {
    marginLeft: 'auto',
  },
  divider: {
    borderWidth: 0.4,
    marginVertical: 8,
    borderColor: COLORS.grayColor,
  },
});
