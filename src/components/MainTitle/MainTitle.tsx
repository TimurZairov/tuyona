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
      <Text style={styles.text}>{t('all')}</Text>
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
    fontSize: SIZES.h4.md,
    fontWeight: '700',
    color: COLORS.blackColor,
  },
  text: {
    color: COLORS.blueColor,
    fontSize: SIZES.small,
    fontWeight: '400',
  },
});
