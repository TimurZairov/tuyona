import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Svg, {Defs, Image, Pattern, Rect, Use} from 'react-native-svg';

const CardLabelIcon = () => {
  return (
    <View>
      <Svg width="45" height="45" viewBox="0 0 45 45" fill="none">
        <Rect width="45" height="45" fill="url(#pattern0_168_1702)" />
        <Defs>
          <Pattern
            id="pattern0_168_1702"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1">
            {/* <Use xlink:href="#image0_168_1702" transform="scale(0.00195312)" /> */}
          </Pattern>
          <Image id="image0_168_1702" width="512" height="512" />
        </Defs>
      </Svg>
    </View>
  );
};

export default CardLabelIcon;

const styles = StyleSheet.create({});
