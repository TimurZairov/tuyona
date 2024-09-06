import {Image, Platform, StyleSheet, View} from 'react-native';
import React, {FC, ReactNode} from 'react';
import {COLORS, width} from '../../theme/theme';
import Header from '../Header/Header';

interface ILayout {
  children: ReactNode;
}

const Layout: FC<ILayout> = ({children}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.backGroundWhite,
        paddingTop: Platform.OS == 'android' ? 16 : 0,
      }}>
      <Image
        style={styles.background}
        source={require('../../assets/image/background.png')}
      />
      <Header />
      {children}
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    width: width + 10,
    resizeMode: 'cover',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
