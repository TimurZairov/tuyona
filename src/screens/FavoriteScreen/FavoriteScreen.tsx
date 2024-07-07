import {Platform, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {COLORS, SIZES} from '../../theme/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useAppContext} from '../../providers/context/context';
import {useAppDispatch, useAppSelector} from '../../providers/redux/type';
import {wishListAction} from '../../providers/redux/actions/wishListAction';

const FavoriteScreen = () => {
  const insets = useSafeAreaInsets();
  const dispatch = useAppDispatch();

  const {accessToken, language} = useAppContext();
  const {wishList, error} = useAppSelector(state => state.wishList);
  //GET WISHLIST
  useEffect(() => {
    if (accessToken) {
      dispatch(wishListAction({accessToken: accessToken.toString(), language}));
    }
  }, [accessToken]);

  return (
    <View style={styles.favorite}>
      {/* Header */}
      <View
        style={[
          styles.header,
          {paddingTop: Platform.OS === 'ios' ? insets.top : 16},
        ]}>
        <Text style={styles.title}>Избранное</Text>
      </View>
      {/* BODY */}
      <View style={styles.body}>
        <View style={styles.iconWrapper}>
          <Ionicons name="heart" size={60} color={COLORS.mainColor} />
        </View>
        <Text style={styles.title}>Список избранных пуст</Text>
        <Text style={styles.subTitle}>У вас еще нет новых напоминаний</Text>
      </View>
    </View>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  favorite: {
    backgroundColor: COLORS.mainColor,
    flex: 1,
  },
  header: {
    padding: 10,
    backgroundColor: COLORS.mainColor,
    borderBottomStartRadius: 16,
    borderBottomRightRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.blackColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  title: {
    fontSize: SIZES.h4.md,
    fontWeight: '700',
    marginBottom: 10,
    color: COLORS.blackColor,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWrapper: {
    padding: 10,
    backgroundColor: COLORS.blueColor,
    borderRadius: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  subTitle: {
    fontSize: SIZES.medium,
    color: COLORS.blackColor,
    fontWeight: '300',
  },
});