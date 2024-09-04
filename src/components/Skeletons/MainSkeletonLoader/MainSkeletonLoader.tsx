import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {COLORS, width} from '../../../theme/theme';
import {SafeAreaView} from 'react-native-safe-area-context';

const MainSkeletonLoader = () => {
  const widthScreen = width - 16;
  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={styles.container}>
        <SkeletonPlaceholder highlightColor={COLORS.mainColor} speed={1200}>
          <SkeletonPlaceholder.Item>
            {/* HEader loading */}
            <SkeletonPlaceholder.Item
              width={widthScreen}
              height={60}
              borderRadius={10}
            />

            <SkeletonPlaceholder.Item
              width={widthScreen}
              height={20}
              borderRadius={5}
              marginTop={10}
            />

            <SkeletonPlaceholder.Item
              width={widthScreen}
              height={150}
              borderRadius={5}
              marginTop={10}
            />
            <SkeletonPlaceholder.Item flexDirection="row" columnGap={8}>
              {[...Array(2)].map((_, index) => {
                return (
                  <SkeletonPlaceholder.Item
                    key={index}
                    width={(widthScreen - 8) / 2}
                    height={200}
                    borderRadius={20}
                    marginTop={10}
                  />
                );
              })}
            </SkeletonPlaceholder.Item>

            <SkeletonPlaceholder.Item
              width={widthScreen}
              height={60}
              borderRadius={10}
              marginTop={10}
            />

            <SkeletonPlaceholder.Item flexDirection="row" columnGap={8}>
              {[...Array(2)].map((_, index) => {
                return (
                  <SkeletonPlaceholder.Item
                    key={index}
                    width={(widthScreen - 8) / 2}
                    height={200}
                    borderRadius={20}
                    marginTop={10}
                  />
                );
              })}
            </SkeletonPlaceholder.Item>
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
      </SafeAreaView>
    </View>
  );
};

export default MainSkeletonLoader;

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
});
