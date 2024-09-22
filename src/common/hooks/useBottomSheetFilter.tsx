import {useCallback, useEffect, useState} from 'react';
import {setIsActive} from '../../providers/redux/slices/activeFilterSlice';
import {useAppDispatch, useAppSelector} from '../../providers/redux/type';

export interface IUseBottomSheetFilter {
  screenTitle: string;
}

const useBottomSheetFilter = (screenTitle: string) => {
  const {isActive} = useAppSelector(state => state.isActive);
  const [isFilterBlockVisible, setIfFilterBlockVisible] = useState<{
    [key: string]: boolean;
  }>({});
  //
  const dispatch = useAppDispatch();
  const {filterModal} = useAppSelector(state => state.filterModal);

  const filtersTitle = (id: string) => {
    const openedFilterBlock = {
      ...isFilterBlockVisible,
      [id]: !isFilterBlockVisible[id],
    };
    setIfFilterBlockVisible(openedFilterBlock);
  };

  const setFilterDependencies = useCallback(
    (title: string, cb: React.Dispatch<React.SetStateAction<string[]>>) => {
      cb(prev => [...prev, title]);
    },
    [],
  );

  //
  const sortFilteredFilterId = () => {
    const filterBlocIdentifier = filterModal.reduce((acc: any, filter: any) => {
      acc[filter.id] = false;
      return acc;
    }, {});
    return filterBlocIdentifier;
  };

  useEffect(() => {
    const filterBlocIdentifier = sortFilteredFilterId();
    setIfFilterBlockVisible(filterBlocIdentifier);
  }, [filterModal]);

  return {
    filtersTitle,
    isActive,
    sortFilteredFilterId,
    isFilterBlockVisible,
  };
};

export default useBottomSheetFilter;
