import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../theme/theme';
import {useTranslation} from 'react-i18next';

interface ITitle {
  title: string;
}

const MainTitle = ({title}: ITitle) => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default MainTitle;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 8,
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  title: {
    fontSize: SIZES.h4.lg,
    fontWeight: '400',
    color: COLORS.blackColor,
  },
});
