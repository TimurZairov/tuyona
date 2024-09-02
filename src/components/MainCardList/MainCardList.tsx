import {
  FlatList,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC, useCallback, useMemo, useRef, useState} from 'react';

import Card from '../Card/Card';
import {useAppSelector} from '../../providers/redux/type';
import {Service} from '../../types/types';
import {COLORS, height, width} from '../../theme/theme';
import Header from '../Header/Header';
import Search from '../Search/Search';
import Filter from '../Filter/Filter';
import {
  BottomSheetModal,
  BottomSheetView,
  useBottomSheetModal,
  useGestureEventsHandlersDefault,
} from '@gorhom/bottom-sheet';
import BottomSheetFilter from '../BotttomSheetFilter/BottomSheetFilter';

interface TCard {
  item: Service;
}

const MainCardList: FC<{title: string}> = ({title}) => {
  const {serviceProvider} = useAppSelector(state => state.serviceProvider);
  const [isModalOpened, setIsModalOpened] = useState(false);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['50%', '50%'], []);

  const renderItem = useCallback(
    ({item}: TCard) => <Card item={item} />,
    [serviceProvider],
  );

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
    setIsModalOpened(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    bottomSheetModalRef.current?.close();
    setIsModalOpened(false);
  }, []);

  return (
    <View style={[styles.main]}>
      {/* BACKGROUND */}
      <Image
        style={styles.background}
        source={require('../../assets/image/background.png')}
      />
      {/* HEADER */}
      <Header />
      {/* Card render */}
      <FlatList
        data={serviceProvider || []}
        showsHorizontalScrollIndicator={false}
        removeClippedSubviews={true}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        ListHeaderComponent={
          <>
            <Search />
            <Filter title={title} onPress={handlePresentModalPress} />
          </>
        }
        numColumns={2}
        ListFooterComponent={<View style={{marginBottom: height / 10}} />}
      />
      {/* Bottom sheet */}
      {isModalOpened && (
        <TouchableOpacity
          style={styles.backgroundSheet}
          onPress={handleCloseModal}
        />
      )}
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        enablePanDownToClose={false}>
        <BottomSheetView style={styles.contentContainer}>
          <BottomSheetFilter />
        </BottomSheetView>
      </BottomSheetModal>
    </View>
  );
};

export default MainCardList;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLORS.grayColor,
    paddingTop: Platform.OS == 'android' ? 16 : 0,
  },
  background: {
    position: 'absolute',
    width: width + 10,
    resizeMode: 'cover',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  backgroundSheet: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
    top: -20,
  },
});
