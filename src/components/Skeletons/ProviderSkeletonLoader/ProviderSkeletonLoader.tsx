import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {COLORS, height, width} from '../../../theme/theme';

const ProviderSkeletonLoader = () => {
  const widthScreen = width - 16;
  return (
    <View>
      <SkeletonPlaceholder highlightColor={COLORS.mainColor} speed={1200}>
        <SkeletonPlaceholder.Item>
          {/* HEader loading */}
          <SkeletonPlaceholder.Item
            width={width}
            height={height / 3}
            borderRadius={10}
          />
          <SkeletonPlaceholder.Item paddingHorizontal={8}>
            <SkeletonPlaceholder.Item
              width={widthScreen}
              height={20}
              borderRadius={5}
              marginTop={10}
            />

            <SkeletonPlaceholder.Item
              width={widthScreen}
              height={80}
              borderRadius={5}
              marginTop={10}
            />
          </SkeletonPlaceholder.Item>

          <SkeletonPlaceholder.Item
            width={widthScreen}
            height={160}
            borderRadius={5}
            marginTop={10}
          />
          <SkeletonPlaceholder.Item
            width={widthScreen}
            height={180}
            borderRadius={5}
            marginTop={10}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    </View>
  );
};

export default ProviderSkeletonLoader;

const styles = StyleSheet.create({});
