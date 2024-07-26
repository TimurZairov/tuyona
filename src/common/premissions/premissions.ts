import {PermissionsAndroid} from 'react-native';

export const galleryPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
      {
        title: 'Доступ к галереи',
        message: 'Приложению требуется доступ к вашей галереии',
        buttonNeutral: 'Не сейчас',
        buttonNegative: 'Отмена',
        buttonPositive: 'Ok',
      },
    );
    return granted;
  } catch (err) {
    console.warn(err);
  }
};
