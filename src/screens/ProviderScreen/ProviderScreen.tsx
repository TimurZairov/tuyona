import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {getMethodApi} from '../../common/getMethodApi';
import {useAppContext} from '../../providers/context/context';
import {height} from '../../theme/theme';

const ProviderScreen = () => {
  const [loading, setLoading] = useState(false);
  const [serviceProvider, setServiceProvider] = useState(null);

  const route = useRoute();
  const insets = useSafeAreaInsets();
  const {language} = useAppContext();
  const {id} = route.params;

  //get service provider by id
  useEffect(() => {
    (async () => {
      setLoading(true);
      const result = await getMethodApi('/service-providers/' + id, language);

      if (!result) {
        throw new Error('Ошибка');
      }
      setServiceProvider(result);
      setLoading(false);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{uri: serviceProvider?.photos[0]?.photo}}
          style={styles.image}
        />
      </View>
      <View>
        <Text>{serviceProvider?.name}</Text>
      </View>
    </View>
  );
};

export default ProviderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});
