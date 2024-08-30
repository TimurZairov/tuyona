import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

const FbInfoIcon = () => {
  return (
    <View>
      <Svg width="33" height="33" viewBox="0 0 33 33" fill="none">
        <Circle cx="16.5" cy="16.5" r="16.5" fill="white" />
        <Path
          d="M29 16.5761C29 22.8524 24.4229 28.0558 18.4478 29V20.2335H21.353L21.9063 16.6076H18.4478V14.2569C18.4478 13.2641 18.9312 12.2978 20.479 12.2978H22.0513V9.21075C22.0513 9.21075 20.624 8.96512 19.2603 8.96512C16.4126 8.96512 14.5522 10.7017 14.5522 13.8448V16.6086H11.3862V20.2335H14.5522V28.999C8.57813 28.0538 4 22.8514 4 16.5761C4 9.63077 9.59668 4 16.5 4C23.4033 4 29 9.62979 29 16.5761Z"
          fill="#00AF9E"
        />
      </Svg>
    </View>
  );
};

export default FbInfoIcon;

const styles = StyleSheet.create({});
