import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

const FbCardIcon = () => {
  return (
    <View>
      <Svg width="14" height="13" viewBox="0 0 14 13" fill="none">
        <Path
          d="M13.0526 6.52632C13.0526 9.78335 10.6629 12.4836 7.54325 12.9736V8.4243H9.06011L9.34895 6.54263H7.54325V5.32277C7.54325 4.80755 7.79563 4.30609 8.60377 4.30609H9.42466V2.70409C9.42466 2.70409 8.67949 2.57662 7.96746 2.57662C6.48068 2.57662 5.50938 3.47781 5.50938 5.10888V6.54314H3.85639V8.4243H5.50938V12.9731C2.39026 12.4826 0 9.78284 0 6.52632C0 2.92206 2.92206 0 6.52632 0C10.1306 0 13.0526 2.92155 13.0526 6.52632Z"
          fill="#00AF9E"
        />
      </Svg>
    </View>
  );
};

export default FbCardIcon;

const styles = StyleSheet.create({});
