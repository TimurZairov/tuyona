import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {getMethodApi} from '../../common/getMethodApi';
import {useAppContext} from '../../providers/context/context';
import {COLORS, height, SIZES, width} from '../../theme/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const ProviderScreen = () => {
  const [loading, setLoading] = useState(false);
  const [serviceProvider, setServiceProvider] = useState(null);
  const [services, setServices] = useState(null);

  const route = useRoute();
  const insets = useSafeAreaInsets();
  const {language} = useAppContext();
  const navigation = useNavigation<NativeStackNavigationProp>();
  const {id} = route.params;

  //service info
  const infoScreenNavigate = (id: string) => {
    navigation.navigate('Info', {id});
  };

  //get service provider by id
  useEffect(() => {
    (async () => {
      setLoading(true);
      const resultInfo = await getMethodApi(
        '/service-providers/' + id,
        language,
      );
      const resultServices = await getMethodApi(
        '/service-providers/' + id + '/services',
        language,
      );

      if (!resultInfo || !resultServices) {
        throw new Error('Ошибка');
      }
      setServiceProvider(resultInfo);
      setServices(resultServices);
      setLoading(false);
    })();
  }, []);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* MAIN */}
      <View style={styles.header}>
        <Image
          source={{uri: serviceProvider?.photos[0]?.photo}}
          style={styles.image}
        />
        <View style={styles.bottom} />
      </View>
      {/* DESCRiption */}
      <View style={styles.body}>
        <Text style={styles.name}>{serviceProvider?.name}</Text>
        <Text style={styles.desc}>{serviceProvider?.short_description}</Text>
        {/* RAtings */}
        <View style={styles.rating}>
          <AntDesign name="star" color={COLORS.blueColor} size={16.7} />
          <Text style={styles.ratingNum}>4.2</Text>
          <Text style={styles.review}>(20 отзывов)</Text>
          {/* ADD */}
          <View style={styles.icons}>
            <Ionicons
              name="bookmark-outline"
              color={COLORS.blueColor}
              size={16.7}
            />
            <Text style={styles.add}>Добавить в избранное</Text>
          </View>
        </View>
        {/* Description */}
        <View style={styles.description}>
          <Text>{serviceProvider?.description}</Text>
        </View>
        {/* CONTACTS */}
        <View>
          <Text style={styles.contactsTitle}>Контакты</Text>
          <View style={{marginTop: 10, flexDirection: 'row', columnGap: 10}}>
            <MaterialIcons name="phone" size={16.7} color={COLORS.blueColor} />
            <Text>+998 99 909 90 90</Text>
          </View>
        </View>
        {/* Services */}
        <View style={{marginTop: 10}}>
          <Text style={styles.contactsTitle}>Услуги</Text>
          <View
            style={{
              width: '100%',
              paddingVertical: 10,
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}>
            {services
              ? services?.map(item => {
                  return (
                    <TouchableOpacity
                      key={item.id}
                      style={{
                        width: width / 2 - 10,
                        padding: 4,
                        marginBottom: 8,
                      }}
                      onPress={() => infoScreenNavigate(item.id)}>
                      <Image
                        source={{uri: item?.categories[0]?.photo}}
                        style={{
                          width: '100%',
                          height: 100,
                          resizeMode: 'cover',
                          borderRadius: 10,
                        }}
                      />
                      <Text
                        style={{
                          fontSize: SIZES.h5.sm,
                          color: COLORS.blackColor,
                        }}>
                        {item.title}
                      </Text>
                    </TouchableOpacity>
                  );
                })
              : null}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProviderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.mainColor,
  },
  header: {
    width: '100%',
    height: height / 2.5,
  },
  image: {
    width: '100%',
    height: height / 2.5,
    resizeMode: 'cover',
  },
  bottom: {
    position: 'absolute',
    width: '100%',
    height: 16,
    backgroundColor: COLORS.mainColor,
    bottom: 0,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },
  body: {
    backgroundColor: COLORS.mainColor,
    flex: 1,
    paddingHorizontal: 8,
    marginBottom: 10,
  },
  name: {
    fontSize: SIZES.h5.lg,
    fontWeight: '700',
    color: COLORS.blackColor,
  },
  desc: {
    fontSize: SIZES.h5.sm,
    fontWeight: '400',
    color: COLORS.lightGray,
    marginTop: 4,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  ratingNum: {
    fontSize: SIZES.h5.lg,
    marginLeft: 2,
    fontWeight: '500',
    color: COLORS.blackColor,
  },
  review: {
    color: COLORS.lightGray,
    marginLeft: 6,
  },
  description: {
    paddingVertical: 6,
  },
  icons: {
    marginLeft: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
  },
  add: {
    marginLeft: 6,
    color: COLORS.blackColor,
    fontSize: SIZES.h5.md,
  },
  contactsTitle: {
    fontSize: SIZES.h5.lg,
    color: COLORS.blackColor,
    fontWeight: '600',
  },
});
