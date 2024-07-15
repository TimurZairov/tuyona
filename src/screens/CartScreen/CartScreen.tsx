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
import {COLORS, SIZES} from '../../theme/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useAppDispatch, useAppSelector} from '../../providers/redux/type';
import {useAppContext} from '../../providers/context/context';
import {getCartAction} from '../../providers/redux/actions/cartAction';
import Button from '../../components/Button/Button';
import {BASE_URL} from '../../config/config';
import {filterCart} from '../../providers/redux/slices/cartSlice';
import {useNavigation} from '@react-navigation/native';
import {InfoNavigationProp} from '../../navigation/types';

const CartScreen = () => {
  const insets = useSafeAreaInsets();
  const {accessToken, language} = useAppContext();
  const [loading, setLoading] = useState(false);

  const dispatch = useAppDispatch();
  const navigation = useNavigation<InfoNavigationProp>();
  const {cart} = useAppSelector(state => state.cart);

  useEffect(() => {
    if (accessToken) {
      dispatch(getCartAction({accessToken: accessToken.toString(), language}));
    }
  }, []);
  //rewrite TODO
  const removeCartItem = async (id: any) => {
    if (loading) {
      return;
    }
    setLoading(true);
    const filtered = cart.filter(item => {
      return item.id !== id;
    });
    dispatch(filterCart(filtered));
    try {
      const response = await fetch(BASE_URL + `/cart/${id}/`, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + accessToken,
        },
      });
      console.log(response);
      await dispatch(
        getCartAction({accessToken: accessToken!.toString(), language}),
      );
    } catch (error) {
      console.log('CartScreen', error);
    } finally {
      setLoading(false);
    }
  };

  // make common
  const navigateToInfo = (id: string) => {
    if (id) {
      navigation.navigate('Info', {id: +id});
    }
  };

  return (
    <View style={styles.favorite}>
      {/* Header */}
      <View
        style={[
          styles.header,
          {paddingTop: Platform.OS === 'ios' ? insets.top : 16},
        ]}>
        <Text style={styles.title}>Корзина</Text>
      </View>
      {/* BODY */}
      {cart && cart.length > 0 ? (
        <FlatList
          data={cart || []}
          contentContainerStyle={{padding: 8}}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={styles.card}
                onPress={() => navigateToInfo(item?.service?.id.toString())}>
                <View style={{width: '100%'}}>
                  <Image
                    source={{uri: item?.service?.photos[0]?.photo}}
                    style={styles.image}
                  />
                  <Text style={styles.name}>
                    {item.service.service_provider.name}
                  </Text>
                  <Text style={styles.name}>{item.price}</Text>
                  <Text style={styles.title}>{item.service.title}</Text>
                  <Text style={styles.description}>
                    {item.service.service_provider.short_description}
                  </Text>
                </View>
                <Button onPress={() => removeCartItem(item.id)}>удалить</Button>
              </TouchableOpacity>
            );
          }}
        />
      ) : (
        // EMPTY CART
        <View style={styles.body}>
          <View style={styles.iconWrapper}>
            <Ionicons name="cart" size={60} color={COLORS.mainColor} />
          </View>
          <Text style={styles.title}>Корина пуста</Text>
        </View>
      )}
    </View>
  );
};

export default React.memo(CartScreen);

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
