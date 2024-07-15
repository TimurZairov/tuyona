import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {memo} from 'react';
import {COLORS, SIZES} from '../../theme/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {Service} from '../../types/types';
import {InfoNavigationProp} from '../../navigation/types';

type Card = {
  item: Service;
};

const Card = memo(({item}: Card) => {
  const navigation = useNavigation<InfoNavigationProp>();

  const infoNavigationScreen = () => {
    navigation.navigate('Info', {id: item.id});
  };

  return (
    <TouchableOpacity style={styles.card} onPress={infoNavigationScreen}>
      <View style={styles.like}>
        <AntDesign name="hearto" color={COLORS.blueColor} size={SIZES.large} />
      </View>
      <Image source={{uri: item?.photos[0]?.photo}} style={styles.image} />
      <Text style={styles.name}>{item?.title}</Text>
      <View style={styles.btn}>
        <Text>{item?.price}</Text>
      </View>
    </TouchableOpacity>
  );
});

export default Card;

const styles = StyleSheet.create({
  like: {
    position: 'absolute',
    right: 16,
    top: 16,
    zIndex: 10,
    backgroundColor: COLORS.mainColor,
    padding: 6,
    borderRadius: 100,
  },
  card: {
    padding: 8,
    backgroundColor: COLORS.mainColor,
    marginBottom: 10,
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  name: {
    fontSize: SIZES.h5.sm,
    fontWeight: '600',
    marginTop: 10,
    color: COLORS.blackColor,
  },
  services: {
    paddingHorizontal: 6,
    backgroundColor: COLORS.grayColor,
    marginTop: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  text: {
    color: COLORS.blackColor,
    fontSize: SIZES.small,
    fontWeight: '300',
  },
  btn: {
    flex: 1,
    backgroundColor: COLORS.grayColor,
    marginTop: 14,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
});
