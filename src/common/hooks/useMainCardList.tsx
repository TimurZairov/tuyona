import {BottomSheetModalMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import {useCallback, useEffect, useState} from 'react';
import {getMethodApi} from '../getMethodApi';
import {useAppContext} from '../../providers/context/context';

export const useMainCardList = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const {language} = useAppContext();
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
  ///////
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `api/crm/provider-categories/1/characteristics`,
        );
      } catch (error) {}
    })();
  }, []);

  return {
    handlePresentModalPress,
    handleCloseModal,
    isModalOpened,
    handleBottomSheetEvents,
  };
};
