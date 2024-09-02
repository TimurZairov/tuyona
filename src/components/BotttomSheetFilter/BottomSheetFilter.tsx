import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useCallback} from 'react';
import MainTitle from '../MainTitle/MainTitle';
import {COLORS, SIZES} from '../../theme/theme';
import FilterBtn from '../Filter/FilterBtn';
import {filterData} from '../../data/slider';
import Slider from 'rn-range-slider';
import Thumb from '../Filter/slider/Thumb';
import Rail from '../Filter/slider/Rail';
import RailSelected from '../Filter/slider/RailSelected';
import Label from '../Filter/slider/Label';

const BottomSheetFilter = () => {
  //slider configuration
  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback(
    (value: number) => <Label text={value} />,
    [],
  );

  return (
    <View style={styles.container}>
      <View style={{alignSelf: 'center'}}>
        <MainTitle title={'Фильтр'} />
      </View>
      {/* FIlter Button */}
      <Text style={styles.text}>Характеристики</Text>
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollBtn}>
          {filterData.map((title, index) => (
            <FilterBtn key={index} title={title} />
          ))}
        </ScrollView>
      </View>

      {/* Filter input slider */}
      <Text style={styles.text}>Цены</Text>
      <View style={{marginVertical: 10}}>
        <Slider
          min={1}
          max={99}
          step={1}
          renderThumb={renderThumb}
          renderRail={renderRail}
          renderRailSelected={renderRailSelected}
          renderLabel={renderLabel}
          minRange={0}
        />
      </View>

      {/* SORT */}
      <Text style={styles.text}>Сортировка</Text>
    </View>
  );
};

export default BottomSheetFilter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
  },
  text: {
    textAlign: 'left',
    color: COLORS.blackColor,
    fontWeight: '300',
    fontSize: SIZES.medium,
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
});
