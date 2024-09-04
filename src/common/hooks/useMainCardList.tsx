import {BottomSheetModalMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import {useCallback, useState} from 'react';

export const useMainCardList = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
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

  return {
    handlePresentModalPress,
    handleCloseModal,
    isModalOpened,
    handleBottomSheetEvents,
  };
};
