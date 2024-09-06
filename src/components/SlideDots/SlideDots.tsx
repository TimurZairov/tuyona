import {StyleSheet, Text, View} from 'react-native';
import React, {FC, useCallback} from 'react';
import {COLORS} from '../../theme/theme';
import {Banner} from '../../types/types';

interface ISlideDots {
  data: Banner[];
  activeSlideIndex: number;
}

const SlideDots: FC<ISlideDots> = ({data, activeSlideIndex}) => {
  const dotItem = useCallback(
    (index: number) => {
      return (
        <View
          key={index}
          style={[
            styles.dots,
            {
              backgroundColor:
                index === activeSlideIndex
                  ? COLORS.blueColor
                  : COLORS.lightGray,
            },
          ]}
        />
      );
    },
    [activeSlideIndex],
  );

  return (
    <View style={styles.slidePagination}>
      {data?.length > 0 && data?.map((_, index) => dotItem(index))}
    </View>
  );
};

export default React.memo(SlideDots);

const styles = StyleSheet.create({
  slidePagination: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 6,
  },
  dots: {
    width: 10,
    aspectRatio: 1,
    backgroundColor: COLORS.lightGray,
    borderRadius: 5,
  },
});
