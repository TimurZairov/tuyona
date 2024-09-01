import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

import React, {FC, useEffect, useState} from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';

import {getMethodApi} from '../../common/getMethodApi';
import {useAppContext} from '../../providers/context/context';
import {COLORS, height, width} from '../../theme/theme';

import {InfoNavigationProp} from '../../navigation/types';
import Charactiristick from '../../components/Charactiristick/Charactiristick';
import FavoriteIcon from '../../assets/icons/FavoriteIcon';
import InsInfoIcon from '../../assets/icons/InsInfoIcon';
import FbInfoIcon from '../../assets/icons/FbInfoIcon';
import TgInfoIcon from '../../assets/icons/TgInfoIcon';
import PhoneInfoIcon from '../../assets/icons/PhoneInfoIcon';
import MainTitle from '../../components/MainTitle/MainTitle';
import Button from '../../components/Button/Button';
import {Rating} from 'react-native-ratings';
import {Providers, Service} from '../../types/types';
import ServiceCard from '../../components/ServiceCard/ServiceCard';

const ProviderScreen: FC = () => {
  const [loading, setLoading] = useState(false);
  const [serviceProvider, setServiceProvider] = useState<Providers | null>(
    null,
  );
  const [services, setServices] = useState<Service[] | null>(null);

  interface ProviderScreenRouteParams {
    id: string;
  }

  type ProviderScreenRouteProp = RouteProp<
    {Provider: ProviderScreenRouteParams},
    'Provider'
  >;

  const route = useRoute<ProviderScreenRouteProp>();
  const {language} = useAppContext();
  const navigation = useNavigation<InfoNavigationProp>();
  const {id} = route.params;

  //service info
  const infoScreenNavigate = (id: string) => {
    navigation.navigate('Info', {id: +id});
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
  }, [id, language]);

  // console.log(JSON.stringify(services, null, 2));s

  //TODO change library to react native htmlview
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* MAIN */}
      <Image
        style={{...StyleSheet.absoluteFillObject}}
        source={require('../../assets/image/Bg.png')}
      />
      <View>
        {serviceProvider?.photos?.length && (
          <Image
            style={styles.sliderImage}
            source={{uri: serviceProvider?.photos[0]?.photo}}
          />
        )}
        <View style={styles.top}>
          <Image source={require('../../assets/image/fireIcon.png')} />
          <Image source={require('../../assets/image/topIconProvider.png')} />
        </View>

        <View style={styles.favoriteBlock}>
          <FavoriteIcon />
        </View>

        <View style={styles.social}>
          <InsInfoIcon />
          <FbInfoIcon />
          <TgInfoIcon />
          <PhoneInfoIcon />
        </View>
      </View>
      {/* User Info */}

      <View style={styles.userContainer}>
        <View style={styles.userWrapper}>
          <View style={styles.user}>
            {serviceProvider?.photos?.length && (
              <Image
                style={styles.userImage}
                source={{uri: serviceProvider?.photos[0]?.photo}}
              />
            )}
          </View>

          <View>
            <Text style={styles.name}>{serviceProvider?.name}</Text>
            {serviceProvider?.short_description?.length && (
              <Text style={styles.short}>
                {serviceProvider?.short_description.slice(0, 20)}
              </Text>
            )}
          </View>
        </View>
      </View>

      {/* user Characteristics */}
      <View style={styles.descContainer}>
        <View style={styles.btnContainer}>
          <Button
            style={{
              width: width / 2 - 20,
              borderBottomRightRadius: 0,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                columnGap: 8,
              }}>
              <Rating
                type="custom"
                ratingCount={5}
                imageSize={18}
                startingValue={serviceProvider?.avg_rating}
                ratingColor="#1AA9B9"
                readonly
              />
              <Text style={styles.textBtn}>
                {serviceProvider?.total_reviews}
              </Text>
            </View>
          </Button>
          <Button
            style={{
              borderBottomLeftRadius: 0,
              backgroundColor: COLORS.redColor,
            }}
            textStyle={{color: COLORS.mainColor}}>
            <Text>Оставить отзыв</Text>
          </Button>
        </View>

        {serviceProvider?.characteristics?.length &&
          serviceProvider?.characteristics.map((item, index) => {
            return (
              <Charactiristick
                key={index}
                index={index}
                serviceProvider={item}
                length={serviceProvider?.characteristics?.length}
                provider
              />
            );
          })}
      </View>

      {/* USerDescription */}
      <View>
        <MainTitle title="Описание" />
        <View style={{paddingHorizontal: 8}}>
          <Text style={styles.desc} numberOfLines={6}>
            {serviceProvider?.description}
          </Text>
        </View>
      </View>

      {/* SERVICE */}
      <MainTitle title="Услуги" />
      <View style={styles.cardContainer}>
        {services &&
          services.map((serviceItem, index) => {
            return <ServiceCard key={index} service={serviceItem} />;
          })}
      </View>
    </ScrollView>
  );
};

export default ProviderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFDFD',
  },
  sliderImage: {
    width: width,
    height: height / 3,
    resizeMode: 'cover',
  },
  top: {
    position: 'absolute',
    top: height / 14,
    left: width / 40,
    height: height / 14,
    justifyContent: 'space-between',
  },
  favoriteBlock: {
    position: 'absolute',
    right: 0,
    top: height / 14,
  },
  social: {
    flexDirection: 'row',
    columnGap: 10,
    position: 'absolute',
    bottom: 10,
    right: width / 40,
  },

  userWrapper: {
    position: 'absolute',
    top: -width / 8,
    left: 8,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  userContainer: {
    paddingHorizontal: 8,
  },
  user: {
    width: width / 4,
    aspectRatio: 1,
    backgroundColor: COLORS.mainColor,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    padding: 4,
  },
  userImage: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    borderBottomLeftRadius: 0,
  },
  name: {
    fontSize: 20,
    fontWeight: '500',
    color: COLORS.blackColor,
    marginBottom: 4,
  },
  short: {
    fontSize: 14,
    fontWeight: '300',
    color: COLORS.blackColor,
    marginBottom: 2,
  },
  descContainer: {
    marginTop: 60,
    paddingHorizontal: 8,
  },
  btnContainer: {flexDirection: 'row', justifyContent: 'space-between'},
  textBtn: {fontSize: 16, fontWeight: '300', color: COLORS.lightGray},
  desc: {
    fontSize: 16,
    fontWeight: '300',
    color: COLORS.blackColor,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    flexWrap: 'wrap',
    marginBottom: height / 10,
  },
});
