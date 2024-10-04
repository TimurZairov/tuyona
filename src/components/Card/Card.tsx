import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC, memo, useEffect, useState} from 'react';
import {Rating} from 'react-native-ratings';
import {COLORS, height, width} from '../../theme/theme';
import {useNavigation} from '@react-navigation/native';
import {Service} from '../../types/types';
import {ServiceProviderNavigationProp} from '../../navigation/types';
import FavoriteCardIcon from '../../assets/icons/FavoriteCardIcon';
import InstagrammCardIcon from '../../assets/icons/InstagrammCardIcon';
import FbCardIcon from '../../assets/icons/FbCardIcon';
import TgCardIcon from '../../assets/icons/TgCardIcon';
import PhoneCardIcon from '../../assets/icons/PhoneCardIcon';
import Charactiristick from '../Charactiristick/Charactiristick';
import AddedFavoriteIcon from '../../assets/icons/AddedFavoriteIcon';
import {useAddToWishListMutation} from '../../providers/redux/slices/userWishList';
import {useAppContext} from '../../providers/context/context';

type Card = {
  item: Service;
  isFavorite?: boolean;
  isShortInfo?: boolean;
};

const Card: FC<Card> = memo(({item, isFavorite}) => {
  const navigation = useNavigation<ServiceProviderNavigationProp>();
  const {accessToken} = useAppContext();
  const [inWishlist, setInWishlist] = useState<boolean>();

  useEffect(() => {
    setInWishlist(item?.in_wishlist);
  }, [item]);

  const [addToWishList, {isLoading, isError, data, error: wishListError}] =
    useAddToWishListMutation();

  const infoNavigationScreen = () => {
    navigation.navigate('Provider', {id: item.id});
  };

  const addToWishListItem = async (itemId: number) => {
    setInWishlist(prev => !prev);
    await addToWishList({
      id: itemId.toString(),
      token: accessToken,
    }).unwrap();
  };
  return (
    <View style={styles.card}>
      <TouchableOpacity
        style={styles.favorite}
        onPress={() => addToWishListItem(item.id)}>
        {isFavorite || inWishlist ? (
          <AddedFavoriteIcon />
        ) : (
          <FavoriteCardIcon />
        )}
      </TouchableOpacity>
      {/* IMAGES */}
      <Pressable style={styles.wrapper} onPress={infoNavigationScreen}>
        {item?.is_new && (
          <View style={styles.label}>
            <Image source={require('../../assets/image/carLabelIcon.png')} />
          </View>
        )}
        <View>
          <Image source={{uri: item?.photos[0]?.photo}} style={styles.image} />
          <View style={styles.icons}>
            <Image source={require('../../assets/image/burn.png')} />
            <Image source={require('../../assets/image/topIcon.png')} />
          </View>
        </View>

        {/* INFO */}
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.social}>
          <InstagrammCardIcon />
          <FbCardIcon />
          <TgCardIcon />
          <PhoneCardIcon />
        </View>

        {/* characteristics */}
        <View style={styles.characteristic}>
          {item &&
            item?.characteristics
              .map((c: any, index: number) => (
                <Charactiristick
                  key={c.id}
                  serviceProvider={c}
                  index={index}
                  length={10}
                  isShortInfo
                />
              ))
              .slice(0, 3)}
        </View>
        <Rating
          type="custom"
          ratingCount={5}
          imageSize={16}
          startingValue={item?.avg_rating}
          ratingColor="#1AA9B9"
          readonly
          style={{alignItems: 'flex-start'}}
        />
      </Pressable>
    </View>
  );
});

export default Card;

const styles = StyleSheet.create({
  card: {
    width: width / 2,

    padding: 6,
    borderRadius: 10,
  },
  favorite: {
    position: 'absolute',
    right: 6,
    top: 6,
    zIndex: 2,
  },
  wrapper: {
    backgroundColor: COLORS.mainColor,
    padding: 6,
    borderTopRightRadius: 90,
    borderTopLeftRadius: 18,
    borderBottomLeftRadius: 18,
    minHeight: height / 2.75,
  },
  label: {
    position: 'absolute',
    zIndex: 1,
  },
  image: {
    width: '100%',
    height: 140,
    resizeMode: 'cover',
    borderTopRightRadius: 90,
    borderTopLeftRadius: 18,
    borderBottomLeftRadius: 18,
  },
  icons: {
    position: 'absolute',
    bottom: -6,
    right: 6,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 4,
  },

  name: {
    fontSize: 14,
    color: COLORS.blackColor,
    marginVertical: 10,
    fontWeight: '400',
  },
  social: {
    flexDirection: 'row',
    columnGap: 6,
  },
  characteristic: {marginVertical: 8},
});
