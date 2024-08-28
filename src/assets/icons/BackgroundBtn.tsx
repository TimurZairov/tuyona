import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

const BackgroundBtn = () => {
  return (
    <View>
      <Svg width="29" height="105" viewBox="0 0 29 105" fill="none">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M28.5 81.0001V105H5C16.3497 101.727 25.293 92.5934 28.5 81.0001Z"
          fill="#00AF9E"
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 28.5586L28.5 0V53C28.5 53 23.2204 43.4079 19.1669 39.346C13.7474 33.9154 7.10935 30.5877 0 28.5586Z"
          fill="#00AF9E"
        />
      </Svg>
    </View>
  );
};

export default BackgroundBtn;

const styles = StyleSheet.create({});
