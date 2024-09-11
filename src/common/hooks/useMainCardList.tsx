import {BottomSheetModalMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import {useCallback, useEffect, useState} from 'react';

import {useAppContext} from '../../providers/context/context';
import {BASE_URL} from '../../config/config';
import {useAppDispatch} from '../../providers/redux/type';
import {setFilterModalSlice} from '../../providers/redux/slices/filterModalSlice';

export const useMainCardList = (filterId: string) => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const {language} = useAppContext();
  const dispatch = useAppDispatch();

  //open Bottom Sheet
  const handlePresentModalPress = useCallback(
    (bottomRef: React.RefObject<BottomSheetModalMethods>) => {
      bottomRef.current?.present();
      setIsModalOpened(true);
    },
    [],
  );
  //Close Bottom Sheet
  const handleCloseModal = useCallback(
    (bottomRef: React.RefObject<BottomSheetModalMethods>) => {
      bottomRef.current?.close();
      setIsModalOpened(false);
    },
    [],
  );
  //get event on presenting bottom sheet
  const handleBottomSheetEvents = (index: number) => {
    if (index === -1) {
      setIsModalOpened(false);
    }
    return;
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          BASE_URL + `/crm/provider-categories/${filterId}/characteristics`,
          {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'Accept-language': language,
            },
          },
        );
        const filterType = await response.json();
        dispatch(setFilterModalSlice(filterType));
      } catch (error) {
        console.log(error, 'useMainCardList');
      }
    })();
  }, []);

  return {
    handlePresentModalPress,
    handleCloseModal,
    isModalOpened,
    handleBottomSheetEvents,
  };
};
