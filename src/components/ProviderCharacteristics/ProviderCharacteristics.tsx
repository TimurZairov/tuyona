import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, width} from '../../theme/theme';

const ProviderCharacteristics = ({mainText, sunText}) => {
  return (
    <View style={{width: width / 2, marginTop: 8}}>
      <Text style={{fontSize: 14, fontWeight: 600, color: COLORS.blackColor}}>
        {mainText}
      </Text>
      <Text style={{color: COLORS.lightGray, fontSize: 12}}>{sunText}</Text>
    </View>
  );
};

export default ProviderCharacteristics;

const styles = StyleSheet.create({});
