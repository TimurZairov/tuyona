import {
  FlatList,
  Image,
  LayoutChangeEvent,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import {FC, useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {BottomSheetModal, BottomSheetView} from '@gorhom/bottom-sheet';
import Card from '../Card/Card';

import {Service} from '../../types/types';
import {COLORS, height, width} from '../../theme/theme';
import Header from '../Header/Header';
import Search from '../Search/Search';
import Filter from '../Filter/Filter';
import BottomSheetFilter from '../BotttomSheetFilter/BottomSheetFilter';
import {useMainCardList} from '../../common/hooks/useMainCardList';
import MainCardListSkeleton from '../Skeletons/MainCardList/MainCardListSkeleton';
import {useProvidersListQuery} from '../../providers/redux/slices/categoriesListSlice';
import {useAppContext} from '../../providers/context/context';
import useBottomSheetFilter from '../../common/hooks/useBottomSheetFilter';
import {useAppSelector} from '../../providers/redux/type';

interface TCard {
  item: Service;
}

const MainCardList: FC<{title: string; filterId: string}> = ({
  title,
  filterId,
}) => {
  const [contentHight, setContentHeight] = useState([height, height]);
  const {accessToken, language} = useAppContext();

  const {} = useBottomSheetFilter();

  //filter
  const [isFilterBlockVisible, setIsFilterBlockVisible] = useState<
    object | null
  >(null);

  console.log(isFilterBlockVisible);

  const {filterModal} = useAppSelector(state => state.filterModal);

  //

  const {
    data: providers,
    isFetching,
    error,
  } = useProvidersListQuery({id: filterId, language, token: accessToken});

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => contentHight, [contentHight]);
  const {
    handleCloseModal,
    isModalOpened,
    handleBottomSheetEvents,
    handlePresentModalPress,
  } = useMainCardList(filterId);

  //CARD
  const renderItem = useCallback(({item}: TCard) => <Card item={item} />, []);
  //get layout
  const handleContentLayout = useCallback((event: LayoutChangeEvent) => {
    const {height: layoutHeight} = event.nativeEvent.layout;
    setContentHeight([
      Math.min(layoutHeight + height / 10),
      Math.min(layoutHeight + height / 10),
    ]);
  }, []);
  //initiate filters blocks
  useEffect(() => {
    if (
      filterModal !== null &&
      filterModal !== undefined &&
      filterModal.length > 0
    ) {
      const initFilters: any = {};
      for (let filterElement of filterModal) {
        initFilters[String(filterElement?.id)] = {
          active: false,
          value: '',
        };
      }
      setIsFilterBlockVisible(initFilters);
    }
  }, [filterModal]);

  return (
    <View style={styles.main}>
      {/* BACKGROUND */}
      <Image
        style={styles.background}
        source={require('../../assets/image/background.png')}
      />
      {/* HEADER */}
      <Header />
      {/* Card render */}

      <FlatList
        data={providers?.results || []}
        removeClippedSubviews={true}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        ListHeaderComponent={
          <>
            <Search />
            <Filter
              title={title}
              onPress={() => handlePresentModalPress(bottomSheetModalRef)}
            />
          </>
        }
        numColumns={2}
        refreshing={true}
        ListFooterComponent={<View style={{marginBottom: height / 10}} />}
        ListEmptyComponent={
          isFetching ? <MainCardListSkeleton /> : <Text>пусто</Text>
        }
      />

      {/* Bottom sheet */}
      {isModalOpened && (
        <TouchableOpacity
          style={styles.backgroundSheet}
          onPress={() => handleCloseModal(bottomSheetModalRef)}
        />
      )}
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleBottomSheetEvents}>
        <BottomSheetView style={styles.contentContainer}>
          <View onLayout={handleContentLayout}>
            <BottomSheetFilter
              screenTitle={title}
              isFilterBlockVisible={isFilterBlockVisible}
              setIsFilterBlockVisible={setIsFilterBlockVisible}
            />
          </View>
        </BottomSheetView>
      </BottomSheetModal>
    </View>
  );
};

export default MainCardList;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLORS.backGroundWhite,
    paddingTop: Platform.OS == 'android' ? 16 : 0,
  },
  background: {
    position: 'absolute',
    width: width + 10,
    resizeMode: 'cover',
    opacity: 0.4,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  backgroundSheet: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
    top: -20,
    zIndex: 10,
  },
});
