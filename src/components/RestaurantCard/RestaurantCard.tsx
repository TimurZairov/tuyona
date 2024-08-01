import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../theme/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface IRestaurantCard {
  restaurant: {
    category: {
      title: string;
      photo: string | null;
      icon: string | null;
      id: number;
    };
    food?: boolean;
  };
}

const RestaurantCard = ({restaurant}: IRestaurantCard) => {
  return (
    <Pressable style={styles.card}>
      {/* Main image */}
      <Image source={{uri: restaurant?.photo}} style={styles.image} />
      {/* FOOTER */}
      <View style={styles.footer}>
        <Image source={{uri: restaurant.logo}} style={styles.logo} />

        <View style={{alignItems: 'stretch'}}>
          <Text style={styles.name}>{restaurant.name}</Text>
          <View style={styles.rating}>
            <AntDesign name="star" color={'yellow'} />
            <Text style={styles.num}>5</Text>
          </View>
        </View>
        {/* Location */}
        <View style={styles.location}>
          <Ionicons
            name="location-outline"
            color={COLORS.blackColor}
            size={18}
          />
          <Text style={styles.num}>12.6</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  card: {
    padding: 6,
    backgroundColor: COLORS.mainColor,
    marginRight: 10,
    borderRadius: 8,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
  },
  image: {width: 200, height: 150, borderRadius: 6},
  logo: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    marginRight: 4,
  },

  name: {
    fontSize: SIZES.h5.lg,
    color: COLORS.blackColor,
    fontWeight: '600',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  num: {
    marginLeft: 3,
  },
  location: {
    marginLeft: 'auto',
    flexDirection: 'row',
  },
});
