import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

const FavoriteIcon = () => {
  return (
    <View>
      <Svg width="65" height="30" viewBox="0 0 65 30" fill="none">
        <Path
          d="M5 1H2.78027L4.251 2.66257L15.1649 15L4.251 27.3374L2.78027 29H5H63H64V28V2V1H63H5Z"
          fill="#00AF9E"
          stroke="#00AF9E"
          stroke-width="2"
        />
        <Path
          d="M38.5806 19.6996L42.4721 22.0596C43.2289 22.5185 44.1649 21.8405 43.9647 20.9784L42.9303 16.5229L46.3805 13.5197C47.0467 12.9398 46.6889 11.8441 45.8088 11.769L41.2728 11.3824L39.502 7.18434C39.1582 6.36921 38.0031 6.36921 37.6593 7.18434L35.8885 11.3824L31.3525 11.769C30.4724 11.8441 30.1146 12.9398 30.7808 13.5197L34.231 16.5229L33.1966 20.9784C32.9964 21.8405 33.9324 22.5185 34.6892 22.0596L38.5806 19.6996Z"
          fill="white"
        />
      </Svg>
    </View>
  );
};

export default FavoriteIcon;

const styles = StyleSheet.create({});
