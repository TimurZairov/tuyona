import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import React, {FC, useCallback, useMemo, useRef, useState} from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import RenderHtml, {isDomElement} from 'react-native-render-html';

import {COLORS, height, width} from '../../theme/theme';

import {InfoNavigationProp} from '../../navigation/types';
import FavoriteIcon from '../../assets/icons/FavoriteIcon';
import InsInfoIcon from '../../assets/icons/InsInfoIcon';
import FbInfoIcon from '../../assets/icons/FbInfoIcon';
import TgInfoIcon from '../../assets/icons/TgInfoIcon';
import PhoneInfoIcon from '../../assets/icons/PhoneInfoIcon';
import MainTitle from '../../components/MainTitle/MainTitle';
import Button from '../../components/Button/Button';
import {Rating} from '@kolking/react-native-rating';

import ServiceCard from '../../components/ServiceCard/ServiceCard';

import useProviderInfo from '../../common/hooks/useProviderInfo';
import ProviderSkeletonLoader from '../../components/Skeletons/ProviderSkeletonLoader/ProviderSkeletonLoader';
import Characteristic from '../../components/Charactiristick/Characteristic';
import {BottomSheetModal, BottomSheetView} from '@gorhom/bottom-sheet';
import {
  useGetProviderFeedbackQuery,
  useLeaveFeedbackMutation,
} from '../../providers/redux/slices/feedbackSlice';
import {useAppContext} from '../../providers/context/context';
import Toast from 'react-native-toast-message';
import CommentsCard from '../../components/CommentCard/CommentsCard';

interface ProviderScreenRouteParams {
  id: string;
}

type ProviderScreenRouteProp = RouteProp<
  {Provider: ProviderScreenRouteParams},
  'Provider'
>;

const ProviderScreen: FC = () => {
  const route = useRoute<ProviderScreenRouteProp>();
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['50%', '50%'], []);
  const {accessToken} = useAppContext();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const navigation = useNavigation<InfoNavigationProp>();
  const {id} = route.params;
  const {loading, serviceProvider, services} = useProviderInfo(id);
  const [isModalOpened, setIsModalOpened] = useState(false);

  const [leaveFeedbackHandler, {error}] = useLeaveFeedbackMutation();
  const {data: providerFeedback} = useGetProviderFeedbackQuery(id);

  const source = {
    html: `${serviceProvider?.description}`,
  };

  //modal
  const handlePresentModalPress = useCallback(() => {
    bottomSheetRef.current?.present();
    setIsModalOpened(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    bottomSheetRef.current?.close();
    setIsModalOpened(false);
  }, []);

  const handleBottomSheetEvents = (index: number) => {
    if (index === -1) {
      setIsModalOpened(false);
    }
    return;
  };

  //feedback

  const handleRating = (userRating: number) => {
    setRating(userRating);
  };

  const createFeedback = async () => {
    if (!accessToken) {
      return;
    }
    const newFeedback = {
      rating,
      providerId: id,
      comment,
    };

    const res = await leaveFeedbackHandler({
      token: accessToken,
      feedback: newFeedback,
    });

    if (res.error) {
      Toast.show({
        type: 'error',
        text1: res.error.data.code,
        text2: res.error.data.detail,
      });
      return;
    }
    Toast.show({
      type: 'success',
      text1: 'Успешно',
      text2: 'Ваш отзыв сохранен',
    });
    handleCloseModal();
  };

  //get service provider by id
  if (loading) {
    return <ProviderSkeletonLoader />;
  }

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
            disabled
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
                paddingTop: 5,
              }}>
              {serviceProvider?.avg_rating! > 0 ? (
                <>
                  <Rating
                    size={16}
                    rating={serviceProvider?.avg_rating}
                    stars-outline
                    fillColor={COLORS.blueColor}
                    // style={{marginTop: 5}}
                    baseColor={COLORS.lightGray}
                  />
                  <Text style={styles.textBtn}>
                    {serviceProvider?.total_reviews}
                  </Text>
                </>
              ) : (
                <Text>Отзывов нет</Text>
              )}
            </View>
          </Button>
          <Button
            style={{
              borderBottomLeftRadius: 0,
              backgroundColor: COLORS.redColor,
            }}
            onPress={handlePresentModalPress}
            textStyle={{color: COLORS.mainColor}}>
            <Text>Оставить отзыв</Text>
          </Button>
        </View>

        {serviceProvider?.characteristics.map((item, index) => {
          return (
            <Characteristic
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
        <View style={{paddingHorizontal: 8, flex: 1}}>
          <RenderHtml contentWidth={width - 16} source={source} />
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

      <View style={{paddingHorizontal: 8, paddingBottom: 100}}>
        <MainTitle title="Отзывы" />
        {providerFeedback &&
          providerFeedback.map((comment: any) => {
            return <CommentsCard key={comment.id} comment={comment} />;
          })}
      </View>
      {isModalOpened && (
        <TouchableOpacity
          style={styles.backgroundSheet}
          onPress={() => handleCloseModal()}
        />
      )}
      <BottomSheetModal
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleBottomSheetEvents}>
        <BottomSheetView
          style={{
            flex: 1,
            padding: 8,
            justifyContent: 'space-between',
            paddingBottom: 50,
          }}>
          <View style={{marginBottom: height / 10}}>
            <View
              style={{
                marginBottom: 16,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Rating
                size={22}
                rating={rating}
                stars-outline
                fillColor={COLORS.blueColor}
                maxRating={5}
                // style={{marginTop: 5}}
                // baseColor={COLORS.blueColor}handleRating
                onChange={handleRating}
              />
            </View>

            <Text style={{fontSize: 12}}>Напишите отзыв</Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: COLORS.lightGray,
                borderRadius: 10,
                marginTop: 10,
              }}>
              <TextInput
                multiline
                style={{width: '100%', height: 150, padding: 10}}
                onChangeText={setComment}
              />
            </View>
          </View>
          <Button
            style={{backgroundColor: COLORS.redColor, alignSelf: 'center'}}
            textStyle={{color: COLORS.mainColor}}
            disabled={
              comment.trim().length === 0 && rating !== null ? true : false
            }
            onPress={createFeedback}>
            Отправить
          </Button>
        </BottomSheetView>
      </BottomSheetModal>
    </ScrollView>
  );
};

export default ProviderScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FDFDFD',
    flex: 1,
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
  },
  backgroundSheet: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
    top: -20,
    zIndex: 10,
  },
});
