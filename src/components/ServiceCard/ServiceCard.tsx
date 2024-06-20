import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS, SIZES, width} from '../../theme/theme';

const ServiceCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.headerText}>Поздравления</Text>
        <Ionicons name="chevron-forward" size={SIZES.large} />
      </View>
      <Text>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using
      </Text>
      <View style={styles.btn}>
        <Text>100$</Text>
      </View>
    </View>
  );
};

export default ServiceCard;

const styles = StyleSheet.create({
  card: {
    padding: 10,
    backgroundColor: COLORS.mainColor,
    marginVertical: 6,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: SIZES.medium,
    fontWeight: '600',
    color: COLORS.blackColor,
    marginBottom: 10,
  },
  btn: {
    width: '100%',
    height: width / 10,
    backgroundColor: COLORS.grayColor,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
});
