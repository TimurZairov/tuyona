import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS, height, SIZES, width} from '../../theme/theme';

const ServiceCard = ({service}: any) => {
  // console.log(JSON.stringify(service, null, 2));

  return (
    <View style={styles.card}>
      {/* Top */}
      <View style={styles.images}>
        <View>
          <Image
            source={{uri: service?.photos[0]?.photo}}
            style={styles.image}
          />
          <Image
            source={require('../../assets/image/carLabelIcon.png')}
            style={styles.label}
          />
          <Image
            source={require('../../assets/image/fireIcon.png')}
            style={styles.icon}
          />
        </View>
      </View>

      {/* description */}
      <View style={styles.descContainer}>
        <Text style={styles.title}>{service.title}</Text>
        <Text style={styles.descriptionText}>{service.short_description}</Text>
      </View>
      {/* PRICE */}
      <View style={styles.priceContainer}>
        <Text style={styles.priceNum}>
          {Number(service.price).toFixed(0)} сум
        </Text>
      </View>
    </View>
  );
};

export default ServiceCard;

const styles = StyleSheet.create({
  card: {
    width: width / 2 - 10,
    minHeight: height / 4,
    padding: 6,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    backgroundColor: COLORS.mainColor,
    marginBottom: 10,
  },
  images: {
    width: '100%',
    height: 120,
  },
  label: {
    position: 'absolute',
    left: -1,
    top: -1,
  },
  icon: {
    position: 'absolute',
    bottom: -8,
    right: 6,
    width: 18,
    height: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 20,
    borderBottomRightRadius: 0,
  },
  descContainer: {
    marginTop: 6,
  },

  title: {
    fontSize: SIZES.small,
    fontWeight: '400',
    color: COLORS.blackColor,
  },
  descriptionText: {
    fontSize: SIZES.small,
    fontWeight: '200',
    marginVertical: 6,
    color: COLORS.blackColor,
  },
  priceContainer: {
    marginVertical: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  priceNum: {
    color: COLORS.redColor,
    fontSize: SIZES.medium,
    fontWeight: '300',
  },
});
