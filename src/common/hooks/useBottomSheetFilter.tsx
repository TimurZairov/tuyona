import {useCallback, useEffect, useState} from 'react';
import {setIsActive} from '../../providers/redux/slices/activeFilterSlice';
import {useAppDispatch, useAppSelector} from '../../providers/redux/type';

export interface IUseBottomSheetFilter {
  screenTitle: string;
}

const useBottomSheetFilter = (screenTitle: string) => {
  const {isActive} = useAppSelector(state => state.isActive);
  const [genderFilterVisible, setGenderFilterVisible] = useState(false);
  const [genderFilter, setGenderFilter] = useState([]);
  const [ageFilter, setAgeFilter] = useState(false);
  const [languageFilterVisible, setLanguageFilterVisible] = useState(false);
  const [languageFilter, setLanguageFilter] = useState([]);
  const [regionVisibleFilter, setRegionVisibleFilter] = useState(false);
  const [regionFilter, setRegionFilter] = useState([]);
  //
  const dispatch = useAppDispatch();
  const {filterModal} = useAppSelector(state => state.filterModal);

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

  const setFilterDependencies = useCallback(
    (title: string, cb: React.Dispatch<React.SetStateAction<string[]>>) => {
      cb(prev => [...prev, title]);
    },
    [],
  );

  //

  useEffect(() => {
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

  return {
    filtersTitle,
    genderFilterVisible,
    genderFilter,
    ageFilter,
    languageFilterVisible,
    languageFilter,
    regionVisibleFilter,
    regionFilter,
    isActive,
  };
};

export default useBottomSheetFilter;
