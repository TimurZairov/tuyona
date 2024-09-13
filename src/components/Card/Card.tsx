import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC, memo} from 'react';
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

type Card = {
  item: Service;
  onPress: (id: string) => void;
  isFavorite?: boolean;
  isShortInfo?: boolean;
};

const Card: FC<Card> = memo(({item, onPress = () => {}, isFavorite}) => {
  const navigation = useNavigation<ServiceProviderNavigationProp>();

  const infoNavigationScreen = () => {
    navigation.navigate('Provider', {id: item.id});
  };
  // console.log(JSON.stringify(item.in_wishlist, null, 2));
  return (
    <View style={styles.card}>
      <TouchableOpacity
        style={styles.favorite}
        onPress={() => onPress(item.id.toString())}>
        {isFavorite || item.in_wishlist ? (
          <AddedFavoriteIcon />
        ) : (
          <FavoriteCardIcon />
        )}
      </TouchableOpacity>
      {/* IMAGES */}
      <Pressable style={styles.wrapper} onPress={infoNavigationScreen}>
        <View style={styles.label}>
          <Image source={require('../../assets/image/carLabelIcon.png')} />
        </View>
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
          {item
            ? item?.characteristics
                .map((c: any, index: number) => (
                  <Charactiristick
                    key={c.id}
                    serviceProvider={c}
                    index={index}
                    length={item?.characteristics?.length}
                    isShortInfo
                  />
                ))
                .slice(0, 3)
            : null}
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

/*
{"avg_rating": "0.0", "characteristics": [{"char_value": "250", "characteristic_type": "NUMBER", "icon": null, "id": 103, "title": "Вместимость"}, {"char_value": "Ташкент, Самарканд", "characteristic_type": "MULTI_CHOICE", "icon": null, "id": 101, "title": "Регион"}, {"char_value": "+", "characteristic_type": "YES/NO", "icon": null, "id": 100, "title": "Можно курить?"}], "contacts": [{"contact_type": "PHONE", "id": 10, "link": "1089", "logo": "http://212.193.54.105:7777/media/uploads/service-providers/contacts/2024/08/06/%D0%91%D0%B5%D0%B7-%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F.svg", "title": "Номер телефона"}], "id": 16, "latitude": "39.683261", "logo": "http://212.193.54.105:7777/media/uploads/service-providers/logo/2024/08/06/logo.png", "longitude": "66.932830", "name": "Японамама", "photos": [{"id": 20, "photo": "http://212.193.54.105:7777/media/uploads/service-providers/photos/2024/08/06/logo.png"}], "provider_type": "RESTAURANT", "short_description": "Yaponamama - это паназиатская кухня Fusion, которая объединяет в себе разнообразие паназиатских вкусов, сочетая в себе уютную и семейную атмосферу.", "total_reviews": 0}


*/
