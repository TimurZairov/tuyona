import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {width} from '../../theme/theme';

const Social = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="logo-instagram" size={40} />
      <AntDesign name="facebook-square" size={40} />
      <AntDesign name="twitter" size={40} />
    </View>
  );
};

export default Social;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flexDirection: 'row',
    width: width / 2,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
});
