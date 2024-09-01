import {FlatList, Image, Platform, StyleSheet, Text, View} from 'react-native';
import React, {FC, useCallback, useMemo, useRef} from 'react';

import Card from '../Card/Card';
import {useAppSelector} from '../../providers/redux/type';
import {Service} from '../../types/types';
import {COLORS, height, width} from '../../theme/theme';
import Header from '../Header/Header';
import Search from '../Search/Search';
import Filter from '../Filter/Filter';
import {BottomSheetModal, BottomSheetView} from '@gorhom/bottom-sheet';

interface TCard {
  item: Service;
}

const MainCardList: FC<{title: string}> = ({title}) => {
  const {serviceProvider} = useAppSelector(state => state.serviceProvider);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  const renderItem = useCallback(
    ({item}: TCard) => <Card item={item} />,
    [serviceProvider],
  );

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
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

      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}>
        <BottomSheetView style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
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
    alignItems: 'center',
  },
});
