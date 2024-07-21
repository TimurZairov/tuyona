import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useAppContext} from '../../providers/context/context';
import i18next from 'i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LanguageScreen = () => {
  const {language, setLanguage} = useAppContext();

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
    <View style={styles.container}>
      <TouchableOpacity onPress={() => changeLang('ru')}>
        <Text>Ru</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => changeLang('uz')}>
        <Text>Uz</Text>
      </TouchableOpacity>
    </View>
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
});
