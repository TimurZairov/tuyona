import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useAppContext} from '../../providers/context/context';
import i18next from 'i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {COLORS} from '../../theme/theme';
import Layout from '../../components/Layout/Layout';
import GoBack from '../../components/GoBack/GoBack';
import {useNavigation} from '@react-navigation/native';

const LanguageScreen = () => {
  const {language, setLanguage} = useAppContext();
  const navigation = useNavigation();
  //change Language
  const changeLang = async (lang: string) => {
    if (language.toLowerCase() === lang.toLowerCase()) {
      return;
    }
    i18next.changeLanguage(lang);
    setLanguage(lang);
    await AsyncStorage.setItem('currentLanguage', lang);
  };

  return (
    <Layout isHeader={false}>
      <View style={{alignSelf: 'baseline', marginLeft: 10}}>
        <GoBack onPress={() => navigation.goBack()} />
      </View>

      <View style={styles.container}>
        <View></View>
        <TouchableOpacity
          style={{
            backgroundColor:
              language === 'ru' ? COLORS.blueColor : 'transparent',
            padding: 10,
            borderRadius: 4,
          }}
          onPress={() => changeLang('ru')}>
          <Text
            style={{
              color: language === 'ru' ? COLORS.mainColor : COLORS.blackColor,
            }}>
            Ru
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor:
              language === 'uz' ? COLORS.redColor : 'transparent',
            padding: 10,
            borderRadius: 4,
          }}
          onPress={() => changeLang('uz')}>
          <Text
            style={{
              color: language === 'uz' ? COLORS.mainColor : COLORS.blackColor,
            }}>
            Uz
          </Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

export default LanguageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    columnGap: 20,
  },
  text: {
    color: COLORS.mainColor,
  },
});
