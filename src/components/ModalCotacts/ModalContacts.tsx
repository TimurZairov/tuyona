import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, height, width} from '../../theme/theme';

const ModalContacts = () => {
  return (
    <View style={styles.modal}>
      <Text>ModalContacts</Text>
    </View>
  );
};

export default ModalContacts;

const styles = StyleSheet.create({
  modal: {
    padding: 20,
    backgroundColor: COLORS.mainColor,
    borderRadius: 10,
  },
});
