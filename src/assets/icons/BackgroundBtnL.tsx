import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

const BackgroundBtnL = () => {
  return (
    <View>
      <Svg width="29" height="105" viewBox="0 0 29 105" fill="none">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1.38706e-05 81.0001V105H23.5C12.1503 101.727 3.20702 92.5934 1.38706e-05 81.0001Z"
          fill="#00AF9E"
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M28.5 28.5586L0 0V53C0 53 5.27955 43.4079 9.3331 39.346C14.7526 33.9154 21.3906 30.5877 28.5 28.5586Z"
          fill="#00AF9E"
        />
      </Svg>
    </View>
  );
};

export default BackgroundBtnL;

const styles = StyleSheet.create({});
