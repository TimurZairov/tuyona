import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

const InActiveSearchTabIcon = () => {
  return (
    <View>
      <Svg width="29" height="29" viewBox="0 0 29 29" fill="none">
        <Circle cx="13.62" cy="13.62" r="13.62" fill="#CDCDCD" />
        <Circle
          cx="13.62"
          cy="13.62"
          r="8.08"
          fill="#7D7D7D"
          stroke="white"
          stroke-width="2"
        />
        <Path
          d="M13.62 9.07998C13.62 9.07998 15.5071 8.96943 16.8888 10.3512C18.0183 11.4807 18.16 13.62 18.16 13.62"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <Path
          d="M22.7 22.7L27.0912 27.0912"
          stroke="#CDCDCD"
          stroke-width="3"
          stroke-linecap="round"
        />
      </Svg>
    </View>
  );
};

export default InActiveSearchTabIcon;

const styles = StyleSheet.create({});
