import {useCallback, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../providers/redux/type';

export interface IUseBottomSheetFilter {
  screenTitle: string;
}

const useBottomSheetFilter = (screenTitle: string) => {
  const [activeId, setActiveId] = useState<string[]>([]);
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
    setFilterDependencies(id);
  };

  const setFilterDependencies = useCallback(
    (id: string) => {
      if (activeId.includes(id)) {
        const filtered = activeId.filter(itemId => itemId !== id);
        setActiveId(filtered);
      } else {
        setActiveId(prevIds => [...prevIds, id]);
      }
    },
    [activeId],
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
    sortFilteredFilterId,
    isFilterBlockVisible,
    activeId,
  };
};

export default useBottomSheetFilter;
