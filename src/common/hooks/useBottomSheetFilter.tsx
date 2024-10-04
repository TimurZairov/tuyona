import {useCallback, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../providers/redux/type';

const useBottomSheetFilter = () => {
  const [activeId, setActiveId] = useState<string[]>([]);

  const [isFilterBlockVisible, setIfFilterBlockVisible] = useState<{
    [key: string]: boolean;
  }>({});

  //
  const dispatch = useAppDispatch();
  const {filterModal} = useAppSelector(state => state.filterModal);

  // const filtersTitle = (id: string) => {
  //   const openedFilterBlock = {
  //     ...isFilterBlockVisible,
  //     [id]: !isFilterBlockVisible[id],
  //   };
  //   setIfFilterBlockVisible(openedFilterBlock);
  //   setFilterDependencies(id);
  // };

  //
  const toggleFilterState = (
    filterId: any,
    initState: any,
    setInitState: any,
  ) => {
    let _initState = {...initState};
    _initState[filterId] = {
      active: !initState[filterId]['active'],
      // value: initState[filterId]['value'],
    };
    setInitState(_initState);
  };

  const changeFilterValueState = (
    filterId: any,
    initState: any,
    setInitState: any,
    value: any,
  ) => {
    let _isFilterBlockVisible = {...initState};
    _isFilterBlockVisible[filterId]['value'] = value;
    setInitState(_isFilterBlockVisible);
    console.log(filterId);
  };

  //

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

    return () => setActiveId([]);
  }, [filterModal]);

  return {
    sortFilteredFilterId,
    isFilterBlockVisible,
    activeId,
    //
    toggleFilterState,
    changeFilterValueState,
  };
};

export default useBottomSheetFilter;
