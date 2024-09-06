import {useState} from 'react';
import {galleryPermission} from '../premissions/premissions';
import ImagePicker from 'react-native-image-crop-picker';
import {useAppDispatch, useAppSelector} from '../../providers/redux/type';
import {useAppContext} from '../../providers/context/context';
import {userEdit} from '../../providers/redux/actions/userAction';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {logOutUser} from '../../providers/redux/slices/userSlice';
import {useNavigation} from '@react-navigation/native';

const useUserProfileScreen = () => {
  const [base64Url, setBase64Url] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const {user} = useAppSelector(state => state.user);
  const {accessToken, setAccessToken} = useAppContext();
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const pickImage = async () => {
    const isGranted = galleryPermission();

    if (!isGranted) {
      return;
    }
    //IMAGE PICKER implementation
    try {
      const image = await ImagePicker.openPicker({
        multiple: false,
        cropping: true,
        mediaType: 'photo',
        includeBase64: true,
      });
      const base64String = `data:${image.mime};base64,${image.data}`;
      if (!image) {
        return;
      }
      setBase64Url(base64String);
      updateUserData(base64String);
    } catch (error) {
      console.log(error);
    }
  };
  //update user photo
  const updateUserData = async (url: string) => {
    if (loading) {
      return;
    }
    setLoading(true);
    const usersData = {
      ...user,
      avatar: url,
    };

    await dispatch(userEdit({data: usersData, token: accessToken!.toString()}));
    setLoading(false);
  };

  //logout
  const logout = async () => {
    navigation.navigate('Profile');
    await AsyncStorage.removeItem('refreshToken');
    setAccessToken(null);
    dispatch(logOutUser());
  };

  return {base64Url, loading, pickImage, logout};
};

export default useUserProfileScreen;
