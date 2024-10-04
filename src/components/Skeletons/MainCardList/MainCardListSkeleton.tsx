import {StyleSheet, View} from 'react-native';
import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {COLORS, width} from '../../../theme/theme';

const MainCardListSkeleton = () => {
  const widthScreen = (width - 22) / 2;
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 8,
        flexDirection: 'row',
        flexWrap: 'wrap',
        columnGap: 6,
      }}>
      {[...Array(10)].map((_, index) => {
        return (
          <View style={{paddingBottom: 10}} key={index}>
            <SkeletonPlaceholder highlightColor={COLORS.mainColor} speed={1200}>
              <SkeletonPlaceholder.Item
                width={widthScreen}
                height={200}
                borderRadius={10}
              />
            </SkeletonPlaceholder>
          </View>
        );
      })}
    </View>
  );
};

export default MainCardListSkeleton;

const styles = StyleSheet.create({});
