import {useNavigation} from '@react-navigation/native';

const useFavorite = () => {
  const navigation = useNavigation();
  //auth navigation
  const handleAuth = () => {
    navigation.navigate('Login');
  };

  return {handleAuth};
};

export default useFavorite;
