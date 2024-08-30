import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import RenderHtml from 'react-native-render-html';
import React, {useEffect, useState} from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {getMethodApi} from '../../common/getMethodApi';
import {useAppContext} from '../../providers/context/context';
import {COLORS, height, SIZES, width} from '../../theme/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {InfoNavigationProp} from '../../navigation/types';
import {SvgUri} from 'react-native-svg';
import Charactiristick from '../../components/Charactiristick/Charactiristick';

const ProviderScreen = () => {
  const [loading, setLoading] = useState(false);
  const [serviceProvider, setServiceProvider] = useState({});
  const [services, setServices] = useState(null);

  interface ProviderScreenRouteParams {
    id: string;
  }

  type ProviderScreenRouteProp = RouteProp<
    {Provider: ProviderScreenRouteParams},
    'Provider'
  >;

  const route = useRoute<ProviderScreenRouteProp>();
  const insets = useSafeAreaInsets();
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

  // console.log(JSON.stringify(serviceProvider, null, 2));

  //TODO change library to react native htmlview
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* MAIN */}

      <View>
        {serviceProvider?.photos?.length && (
          <Image
            style={styles.sliderImage}
            source={{uri: serviceProvider?.photos[0]?.photo}}
          />
        )}
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
  sliderImage: {
    width: width,
    height: height / 3,
  },
});
