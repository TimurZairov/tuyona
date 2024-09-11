import {
  FlatList,
  Image,
  LayoutChangeEvent,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {FC, useCallback, useMemo, useRef, useState} from 'react';
import {BottomSheetModal, BottomSheetView} from '@gorhom/bottom-sheet';
import Card from '../Card/Card';
import {useAppSelector} from '../../providers/redux/type';
import {Service} from '../../types/types';
import {COLORS, height, width} from '../../theme/theme';
import Header from '../Header/Header';
import Search from '../Search/Search';
import Filter from '../Filter/Filter';
import BottomSheetFilter from '../BotttomSheetFilter/BottomSheetFilter';
import {useMainCardList} from '../../common/hooks/useMainCardList';
import useCard from '../../common/hooks/useCard';

interface TCard {
  item: Service;
}

const MainCardList: FC<{title: string; filterId: string}> = ({
  title,
  filterId,
}) => {
  const {categoryListItems} = useAppSelector(state => state.categoryListItems);
  const [contentHight, setContentHeight] = useState([height, height]);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => contentHight, [contentHight]);
  //hook

  const {
    handleCloseModal,
    isModalOpened,
    handleBottomSheetEvents,
    handlePresentModalPress,
  } = useMainCardList(filterId);

  const {addToWishListItems} = useCard();
  //CARD
  const renderItem = useCallback(
    ({item}: TCard) => <Card item={item} onPress={addToWishListItems} />,
    [categoryListItems],
  );
  //get layout
  const handleContentLayout = useCallback((event: LayoutChangeEvent) => {
    const {height: layoutHeight} = event.nativeEvent.layout;
    setContentHeight([
      Math.min(layoutHeight + height / 10),
      Math.min(layoutHeight + height / 10),
    ]);
  }, []);

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
        data={categoryListItems || []}
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
        ListFooterComponent={<View style={{marginBottom: height / 10}} />}
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
            <BottomSheetFilter />
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
