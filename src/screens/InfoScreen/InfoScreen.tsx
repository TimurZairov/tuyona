import React, {useEffect, useState} from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS, SIZES, height, width} from '../../theme/theme';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Button from '../../components/Button/Button';
import {useAppContext} from '../../providers/context/context';
import {useAppDispatch} from '../../providers/redux/type';
import {
  addToCartAction,
  getCartAction,
} from '../../providers/redux/actions/cartAction';
import Toast from 'react-native-toast-message';
import {
  addToWishList,
  wishListAction,
} from '../../providers/redux/actions/wishListAction';
import {getMethodApi} from '../../common/getMethodApi';

//types for routes params
interface InfoRouteParams {
  id: string;
}
type InfoScreenRouteProp = RouteProp<{Info: InfoRouteParams}, 'Info'>;

const InfoScreen = () => {
  const [loading, setLoading] = useState(false);
  const [service, setService] = useState({});

  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const route = useRoute<InfoScreenRouteProp>();
  const {accessToken, language} = useAppContext();
  const dispatch = useAppDispatch();

  const {id} = route.params;

  //ADD TO CART ITEMS
  const addToCart = async () => {
    if (loading) {
      return;
    }

    if (!accessToken || accessToken === null || accessToken === undefined) {
      Toast.show({
        type: 'info',
        text1: 'Ошибка',
        text2:
          'Вы не авторизованны, пройдите авторзацию или зарегистрируйтесь ',
      });
      navigation.navigate('Login');
      return;
    }

    setLoading(true);
    const newItem = {
      service: id,
      count: '1.00',
    };

    try {
      await dispatch(
        addToCartAction({token: accessToken!.toString(), data: newItem}),
      );
    } catch (error) {
      console.log('info screen', error);
    } finally {
      setLoading(false);
      if (!accessToken) {
        return;
      }
      dispatch(getCartAction({accessToken: accessToken!.toString(), language}));
    }
  };

  //ADD TO WISHLIST
  const addToWishListItems = async () => {
    if (loading) {
      return;
    }

    if (!accessToken || accessToken === null || accessToken === undefined) {
      Toast.show({
        type: 'info',
        text1: 'Ошибка',
        text2:
          'Вы не авторизованны, пройдите авторзацию или зарегистрируйтесь ',
      });
      navigation.navigate('Login');
      return;
    }

    setLoading(true);
    const newItem = {
      service: id,
    };

    try {
      await dispatch(
        addToWishList({data: newItem, token: accessToken!.toString()}),
      );
    } catch (error) {
      console.log('info screen add to wishlist', error);
    } finally {
      setLoading(false);
      //todo
      await dispatch(
        wishListAction({accessToken: accessToken!.toString(), language}),
      );
    }
  };
  //get service by service id
  useEffect(() => {
    (async () => {
      setLoading(true);
      const result = await getMethodApi(
        `/services/${id}/`,
        language,
        accessToken,
      );
      if (!result) {
        setLoading(false);
        return;
      }

      setService(result);
      setLoading(false);
    })();
  }, []);

  return (
    <View style={styles.info}>
      {/* Navigation */}
      <View
        style={[styles.header, {top: Platform.OS === 'ios' ? insets.top : 16}]}>
        {/* GO BACK */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.btn}>
          <Ionicons
            name="chevron-back"
            size={SIZES.large}
            color={COLORS.mainColor}
          />
        </TouchableOpacity>
        {/* CONTact */}
        <View style={styles.contact}>
          {/*  */}
          <TouchableOpacity style={styles.btn} onPress={addToWishListItems}>
            <Ionicons
              name="heart-outline"
              size={SIZES.large}
              color={COLORS.mainColor}
            />
          </TouchableOpacity>
          {/*  */}
          <TouchableOpacity style={styles.btn}>
            <AntDesign
              name="phone"
              size={SIZES.large}
              color={COLORS.mainColor}
            />
          </TouchableOpacity>
          {/*  */}
          <TouchableOpacity style={styles.btn}>
            <AntDesign
              name="sharealt"
              size={SIZES.large}
              color={COLORS.mainColor}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* CHECK TYPES */}
      {/* MAIN */}
      {service?.photos?.length > 0 && (
        <Image
          source={{
            uri: service?.photos[0]?.photo,
          }}
          style={styles.image}
        />
      )}
      {/* INFO */}
      <View style={styles.container}>
        {/* Service */}
        <Text style={styles.service}>Услуги</Text>
        <ServiceCard
          description={service?.description}
          price={service?.price}
        />
        {/* CHECK */}
        <Button
          style={{borderRadius: 8}}
          textStyle={{color: COLORS.mainColor}}
          onPress={addToCart}>
          Добавить в корзину
        </Button>
      </View>
    </View>
  );
};

export default InfoScreen;

const styles = StyleSheet.create({
  info: {
    flex: 1,
    backgroundColor: COLORS.grayColor,
  },
  header: {
    position: 'absolute',
    paddingHorizontal: 8,
    zIndex: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    backgroundColor: 'rgba(1, 1, 1, 0.25)',
    padding: 10,
    borderRadius: 20,
  },
  contact: {
    width: width / 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  image: {
    height: height / 2.5,
    borderBottomStartRadius: 20,
    borderEndEndRadius: 20,
  },
  container: {
    flex: 1,
    paddingHorizontal: 8,
  },
  service: {
    paddingVertical: 10,
    fontSize: SIZES.h4.md,
    fontWeight: '800',
  },
  mainTitle: {},
});
