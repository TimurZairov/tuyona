import {Image, StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import {DrawerContentComponentProps} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import Button from '../../components/Button/Button';
import {COLORS, SIZES} from '../../theme/theme';

const DrawerScreen: FC<DrawerContentComponentProps> = props => {
  const navigation = useNavigation();

  const aboutNavigation = () => {
    navigation.navigate('About');
  };

  return (
    <View style={styles.drawer}>
      <Image source={require('../../assets/image/drawerLogo.png')} />
      <View style={styles.screens}>
        <Button style={styles.btn} textStyle={styles.btnText}>
          О нас
        </Button>
        <Button style={styles.btn} textStyle={styles.btnText}>
          Партнерам
        </Button>
        <Button style={styles.btn} textStyle={styles.btnText}>
          Политика конфиденциальности
        </Button>
        <Button style={styles.btn} textStyle={styles.btnText}>
          Контакты
        </Button>
      </View>
      <View style={styles.bg}>
        <Image
          resizeMode="cover"
          source={require('../../assets/image/drawerBg.png')}
        />
      </View>
    </View>
  );
};

export default DrawerScreen;

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
    overflow: 'hidden',
  },
  screens: {
    flex: 1,
    paddingTop: 30,
  },
  btn: {
    backgroundColor: COLORS.redColor,
    borderBottomLeftRadius: 0,
  },
  btnText: {
    fontSize: SIZES.small,
    color: COLORS.mainColor,
  },
  bg: {
    position: 'absolute',
    bottom: -60,
  },
});
