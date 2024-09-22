import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {FC, ReactNode, useCallback, useState} from 'react';
import MainTitle from '../MainTitle/MainTitle';
import {COLORS, SIZES} from '../../theme/theme';
import FilterBtn from '../Filter/FilterBtn';
import Slider from 'rn-range-slider';
import Thumb from '../Filter/slider/Thumb';
import Rail from '../Filter/slider/Rail';
import RailSelected from '../Filter/slider/RailSelected';
import Label from '../Filter/slider/Label';
import FilterScroll from '../FilterScroll/FilterScroll';

import useBottomSheetFilter, {
  IUseBottomSheetFilter,
} from '../../common/hooks/useBottomSheetFilter';
import {useAppSelector} from '../../providers/redux/type';

const choiceType = {
  choice: 'CHOICE',
  number: 'NUMBER',
  multi: 'MULTI_CHOICE',
};

const BottomSheetFilter: FC<IUseBottomSheetFilter> = ({screenTitle}) => {
  const {filterModal} = useAppSelector(state => state.filterModal);
  const {filtersTitle, sortFilteredFilterId, isFilterBlockVisible, activeId} =
    useBottomSheetFilter(screenTitle);
  //slider configuration
  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabelPrice = useCallback(
    (value: number) => <Label value={value} text={'сум'} />,
    [],
  );

  const renderLabelExp = useCallback(
    (value: number) => <Label value={value} text={'лет'} />,
    [],
  );

  const sortFilteredItems = (): ReactNode => {
    return filterModal.map((item, index) => {
      return (
        <View key={item.id}>
          {/* Experience */}
          <Text style={styles.text}>Возраст</Text>
          <View style={styles.filterContainer}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                position: 'absolute',
                top: 0,
                width: '100%',
              }}>
              <Text style={styles.textAnchor}>0</Text>
              <Text style={styles.textAnchor}>99 лет</Text>
            </View>

            <View style={[{flexDirection: 'row'}]}>
              <View style={styles.thumb} />
              <View style={[styles.thumb, {right: 0}]} />
              <Slider
                min={0}
                max={99}
                step={1}
                renderThumb={renderThumb}
                renderRail={renderRail}
                renderRailSelected={renderRailSelected}
                renderLabel={renderLabelExp}
                minRange={0}
                style={{flex: 1}}
              />
            </View>
          </View>
        </View>
      );
    });
  };

  return (
    <>
      <View>
        <View style={{alignSelf: 'center'}}>
          <MainTitle title={'Фильтр'} />
        </View>
        {/* FIlter Button */}
        <Text style={styles.text}>Характеристики</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollBtn}>
          {filterModal.map((filterItem, index) => (
            <FilterBtn
              key={index}
              filterItem={filterItem}
              onPress={() => filtersTitle(filterItem?.id)}
              isActive={activeId}
            />
          ))}
        </ScrollView>
      </View>

      {filterModal.map((filter: any, index: number) => {
        if (filter.characteristic_type === choiceType.multi) {
          return (
            <View>
              {isFilterBlockVisible && isFilterBlockVisible[filter.id] && (
                <View style={styles.filterContainer}>
                  <Text style={styles.text}>{filter.title_ru}</Text>
                  <FilterScroll arr={filter?.options} />
                </View>
              )}
            </View>
          );
        } else if (filter.characteristic_type === choiceType.number) {
          sortFilteredItems();
        }
      })}
    </>
  );
};

export default BottomSheetFilter;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: 'red',
  },
  text: {
    textAlign: 'left',
    color: COLORS.blackColor,
    fontWeight: '300',
    fontSize: SIZES.medium,
    marginTop: 10,
  },
  scrollBtn: {
    marginVertical: 10,
  },
  marker: {
    width: 20,
    aspectRatio: 1,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'red',
    backgroundColor: COLORS.mainColor,
  },
  marker2: {
    width: 400,
    aspectRatio: 1,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'red',
    backgroundColor: COLORS.mainColor,
  },
  filterContainer: {
    marginTop: 10,
  },
  thumb: {
    width: 24,
    aspectRatio: 1,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: COLORS.grayColor,
    position: 'absolute',
    bottom: 0,
    backgroundColor: COLORS.grayColor,
  },
  textAnchor: {
    fontSize: SIZES.xsmall,
    fontWeight: '200',
    color: COLORS.blackColor,
  },
});
