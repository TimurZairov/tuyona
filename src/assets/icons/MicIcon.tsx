import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Svg, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';

const MicIcon = () => {
  return (
    <View>
      <Svg width="26" height="24" viewBox="0 0 26 24" fill="none">
        <G clip-path="url(#clip0_125_2085)">
          <Path
            d="M13.0204 14C14.7385 14 16.115 12.66 16.115 11L16.1254 5C16.1254 3.34 14.7385 2 13.0204 2C11.3023 2 9.91545 3.34 9.91545 5V11C9.91545 12.66 11.3023 14 13.0204 14ZM11.7784 4.9C11.7784 4.24 12.3373 3.7 13.0204 3.7C13.7035 3.7 14.2624 4.24 14.2624 4.9L14.252 11.1C14.252 11.76 13.7035 12.3 13.0204 12.3C12.3373 12.3 11.7784 11.76 11.7784 11.1V4.9ZM18.5058 11C18.5058 14 15.877 16.1 13.0204 16.1C10.1639 16.1 7.53499 14 7.53499 11H5.77551C5.77551 14.41 8.59067 17.23 11.9854 17.72V21H14.0554V17.72C17.4501 17.24 20.2653 14.42 20.2653 11H18.5058Z"
            fill="#FF524D"
          />
        </G>
        <Defs>
          <ClipPath id="clip0_125_2085">
            <Rect
              width="24.8396"
              height="24"
              fill="white"
              transform="translate(0.600586)"
            />
          </ClipPath>
        </Defs>
      </Svg>
    </View>
  );
};

export default MicIcon;

const styles = StyleSheet.create({});
