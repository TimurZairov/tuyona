import {useCallback, useState} from 'react';
import {NativeScrollEvent, NativeSyntheticEvent} from 'react-native';
import {width} from '../../theme/theme';

const useScrollProgress = () => {
  const [scrollLength, setScrollLength] = useState(0);

  const handleScrollEvents = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const {contentOffset, contentSize, layoutMeasurement} = event.nativeEvent;
      const scrollLayoutLength = width / 1.7;
      const percentage =
        contentOffset.x / (contentSize.width - layoutMeasurement.width);

      if (contentSize.width > scrollLayoutLength) {
        setScrollLength(Number(scrollLayoutLength * percentage));
      }
    },
    [],
  );

  return {scrollLength, handleScrollEvents};
};

export default useScrollProgress;
