import {
  FlatList,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {COLORS, SIZES} from '../../theme/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useAppContext} from '../../providers/context/context';
import {useAppDispatch, useAppSelector} from '../../providers/redux/type';
import {
  removeFromWishList,
  wishListAction,
} from '../../providers/redux/actions/wishListAction';
import Button from '../../components/Button/Button';
import {useNavigation} from '@react-navigation/native';
import {InfoNavigationProp} from '../../navigation/types';

const FavoriteScreen = () => {
  const [loading, setLoading] = useState(false);

  const insets = useSafeAreaInsets();
  const dispatch = useAppDispatch();
  const navigation = useNavigation<InfoNavigationProp>();

  const {accessToken, language} = useAppContext();
  //state
  const {wishList} = useAppSelector(state => state.wishList);

  const removeItemFromWishList = async (id: any) => {
    if (loading || !accessToken) {
      return;
    }
    setLoading(true);
    try {
      //remove action
      await dispatch(
        removeFromWishList({id: id.toString(), token: accessToken.toString()}),
      );
      //refresh list get action
      await dispatch(
        wishListAction({accessToken: accessToken.toString(), language}),
      );
    } catch (error) {
      console.log('CartScreen', error);
    } finally {
      setLoading(false);
    }
  };

  //

  const navigateToInfo = (id: string) => {
    if (id) {
      navigation.navigate('Info', {id: +id});
    }
  };

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

      {wishList && wishList.length > 0 ? (
        <FlatList
          data={wishList || []}
          contentContainerStyle={{padding: 8}}
          renderItem={({item}) => {
            return (
              // MAKE COMPONENT
              <TouchableOpacity
                style={styles.card}
                onPress={() => navigateToInfo(item?.service?.id.toString())}>
                <View style={{width: '100%'}}>
                  <Image
                    // CHECK TYPES
                    source={{uri: item?.service?.photos[0]?.photo}}
                    style={styles.image}
                  />
                  <Text style={styles.name}>
                    {item.service.service_provider.name}
                  </Text>
                  <Text style={styles.title}>{item.service.title}</Text>
                  <Text style={styles.description}>
                    {item.service.service_provider.short_description}
                  </Text>
                </View>
                <Button onPress={() => removeItemFromWishList(item.id)}>
                  удалить
                </Button>
              </TouchableOpacity>
            );
          }}
        />
      ) : (
        // EMPTY CART
        <View style={styles.body}>
          <View style={styles.iconWrapper}>
            <Ionicons name="heart" size={60} color={COLORS.mainColor} />
          </View>
          <Text style={styles.title}>Список избранных пуст</Text>
          <Text style={styles.subTitle}>У вас еще нет новых напоминаний</Text>
        </View>
      )}
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

  //

  card: {
    marginBottom: 10,
    backgroundColor: COLORS.mainColor,
    shadowColor: '#000',
    padding: 10,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },

  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    backgroundColor: COLORS.grayColor,
    marginBottom: 10,
    borderRadius: 6,
  },

  name: {
    fontSize: SIZES.h4.sm,
    fontWeight: '600',
    marginBottom: 6,
    color: COLORS.blackColor,
  },
  description: {
    fontSize: SIZES.h5.md,
    fontWeight: '400',
    color: COLORS.blackColor,
    marginBottom: 10,
  },
});
