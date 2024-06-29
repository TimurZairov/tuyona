import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, SIZES, height, width} from '../../theme/theme';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const InfoScreen = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.info}>
      {/* Navigation */}
      <View style={[styles.header, {top: insets.top}]}>
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
          <TouchableOpacity style={styles.btn}>
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

      {/* MAIN */}
      <Image
        source={{
          uri: 'https://repost.uz/storage/uploads/file_5b10456e434296.773592021527793006.jpg',
        }}
        style={styles.image}
      />
      {/* INFO */}
      <View style={styles.container}>
        {/* Service */}
        <Text style={styles.service}>Услуги</Text>
        <ServiceCard />
        <ServiceCard />
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
