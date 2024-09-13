import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {FC, ReactNode, useCallback, useEffect, useState} from 'react';
import MainTitle from '../MainTitle/MainTitle';
import {COLORS, SIZES} from '../../theme/theme';
import FilterBtn from '../Filter/FilterBtn';
import Slider from 'rn-range-slider';
import Thumb from '../Filter/slider/Thumb';
import Rail from '../Filter/slider/Rail';
import RailSelected from '../Filter/slider/RailSelected';
import Label from '../Filter/slider/Label';
import FilterScroll from '../FilterScroll/FilterScroll';
import {useAppDispatch, useAppSelector} from '../../providers/redux/type';
import {setIsActive} from '../../providers/redux/slices/activeFilterSlice';

interface IBottomSheetFilter {
  screenTitle: string;
}

const choiceType = {
  choice: 'CHOICE',
  number: 'NUMBER',
  multi: 'MULTI_CHOICE',
};

const BottomSheetFilter: FC<IBottomSheetFilter> = ({screenTitle}) => {
  const [genderFilterVisible, setGenderFilterVisible] = useState(false);
  const [ageFilter, setAgeFilter] = useState(false);
  const [languageFilterVisible, setLanguageFilterVisible] = useState(false);
  const [regionVisibleFilter, setRegionVisibleFilter] = useState(false);
  const [genderFilter, setGenderFilter] = useState([]);
  const [languageFilter, setLanguageFilter] = useState([]);
  const [regionFilter, setRegionFilter] = useState([]);

  //
  const dispatch = useAppDispatch();

  // const [isActive, setIsActive] = useState<string[]>([]);

  const {filterModal} = useAppSelector(state => state.filterModal);
  const {isActive} = useAppSelector(state => state.isActive);
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

  const setFilterDependencies = useCallback(
    (title: string, cb: React.Dispatch<React.SetStateAction<string[]>>) => {
      cb(prev => [...prev, title]);
    },
    [],
  );

  const filtersTitle = (title: string, btn) => {
    if (screenTitle === 'Артисты') {
      if (isActive.includes(title)) {
        const filtered = isActive.filter(item => item !== title);
        dispatch(setIsActive(filtered));
      } else {
        // setIsActive(prev => [...prev, title]);
        dispatch(setIsActive([...isActive, title]));
        setFilterDependencies(title, setIsActive);
      }
      if (title === 'Пол') {
        setGenderFilterVisible(prev => !prev);
        setGenderFilter(btn?.options);
        return;
      }
      if (title === 'Возраст') {
        setAgeFilter(prev => !prev);
        return;
      }
      if (title === 'Язык') {
        setLanguageFilterVisible(prev => !prev);
        setLanguageFilter(btn?.options);
        return;
      }

      if (title === 'Регион') {
        setRegionVisibleFilter(prev => !prev);
        setRegionFilter(btn?.options);
      }
    }
  };

  useEffect(() => {
    // console.log(JSON.stringify(filterModal, null, 2));
    if (screenTitle === 'Артисты') {
      if (isActive.includes('Пол')) {
        const elementIndex = filterModal.findIndex(el => {
          return el?.title_ru === 'Пол';
        });

        setGenderFilter(filterModal[elementIndex]?.options);
        setGenderFilterVisible(true);
      }

      if (isActive.includes('Язык')) {
        const elementIndex = filterModal.findIndex(el => {
          return el?.title_ru === 'Язык';
        });

        setLanguageFilter(filterModal[elementIndex]?.options);
        setLanguageFilterVisible(true);
      }
      //Регион
      if (isActive.includes('Регион')) {
        const elementIndex = filterModal.findIndex(el => {
          return el?.title_ru === 'Регион';
        });

        setRegionFilter(filterModal[elementIndex]?.options);
        setRegionVisibleFilter(true);
      }

      if (isActive.includes('Возраст')) {
        setAgeFilter(true);
      }
    }
  }, [filtersTitle]);

  const sortFilteredItems = (): ReactNode => {
    return filterModal.map((item, index) => {
      if (item.characteristic_type === choiceType.number) {
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
      }
    });
  };

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
          {filterModal.map((filterItem, index) => (
            <FilterBtn
              key={index}
              filterItem={filterItem}
              onPress={() => filtersTitle(filterItem?.title_ru, filterItem)}
              isActive={isActive}
            />
          ))}
        </ScrollView>
      </View>

      {/* Filter input slider */}

      {/* SORT */}
      {genderFilterVisible && (
        <View style={styles.filterContainer}>
          <Text style={styles.text}>Пол</Text>
          <FilterScroll arr={genderFilter} />
        </View>
      )}

      {ageFilter ? sortFilteredItems() : null}

      {languageFilterVisible ? (
        <View style={styles.filterContainer}>
          <Text style={styles.text}>Язык</Text>
          <FilterScroll arr={languageFilter} />
        </View>
      ) : null}
      {/* GENDER */}

      {/*  */}
      {regionVisibleFilter ? (
        <View style={styles.filterContainer}>
          <Text style={styles.text}>Регион</Text>
          <FilterScroll arr={regionFilter} />
        </View>
      ) : null}
    </View>
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
