import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

const InActiveFavoriteTabIcon = () => {
  return (
    <View>
      <Svg width="31" height="28" viewBox="0 0 31 28" fill="none">
        <Path
          d="M22.6012 0C21.1472 0.0225115 19.725 0.428312 18.4781 1.17642C17.2312 1.92452 16.2037 2.98843 15.4996 4.26068C14.7955 2.98843 13.7681 1.92452 12.5212 1.17642C11.2743 0.428312 9.852 0.0225115 8.39807 0C6.08045 0.100736 3.8969 1.11467 2.32449 2.82026C0.752089 4.52585 -0.0813498 6.78446 0.00627134 9.10262C0.00627134 14.9757 6.18508 21.3852 11.3679 25.7324C12.5251 26.7047 13.9881 27.2378 15.4996 27.2378C17.0111 27.2378 18.4741 26.7047 19.6313 25.7324C24.8141 21.3852 30.993 14.9732 30.993 9.10262C31.0806 6.78446 30.2471 4.52585 28.6747 2.82026C27.1023 1.11467 24.9188 0.100736 22.6012 0Z"
          fill="#CDCDCD"
        />
      </Svg>
    </View>
  );
};

export default InActiveFavoriteTabIcon;

const styles = StyleSheet.create({});
