import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

const FbCardIcon = () => {
  return (
    <View>
      <Svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <Path
          d="M26 13C26 19.4878 21.2398 24.8666 15.0257 25.8426V16.7807H18.0471L18.6225 13.0325H15.0257V10.6026C15.0257 9.57633 15.5284 8.57746 17.1382 8.57746H18.7733V5.38637C18.7733 5.38637 17.289 5.13246 15.8707 5.13246C12.9091 5.13246 10.9743 6.92758 10.9743 10.1766V13.0335H7.68168V16.7807H10.9743V25.8416C4.76125 24.8645 0 19.4868 0 13C0 5.82055 5.82055 0 13 0C20.1795 0 26 5.81953 26 13Z"
          fill="#00AF9E"
        />
      </Svg>
    </View>
  );
};

export default FbCardIcon;

const styles = StyleSheet.create({});
