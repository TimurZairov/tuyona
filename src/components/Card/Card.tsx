import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES, width} from '../../theme/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';

type Card = {
  item: {
    name: string;
    url: string;
    price: string;
    services: string[];
  };
};

const Card = ({item}: Card) => {
  return (
    <View style={styles.card}>
      <View style={styles.like}>
        <AntDesign name="hearto" color={COLORS.blueColor} size={SIZES.large} />
      </View>
      <Image source={{uri: item.url}} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      {item.services.map(text => {
        return (
          <View key={text} style={styles.services}>
            <Text style={styles.text}>{text}...</Text>
          </View>
        );
      })}
      <View style={styles.btn}>
        <Text>{item.price}</Text>
      </View>
    </View>
  );
};

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
    marginRight: 10,
    borderRadius: 10,
  },
  image: {
    width: width / 2.5,
    aspectRatio: 1,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  name: {
    fontSize: SIZES.h4.sm,
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
