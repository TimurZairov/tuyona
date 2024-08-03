import {PermissionsAndroid, Platform} from 'react-native';

//GALLERY PERMISSION
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

//LOCATION PERMISSION
export const requestLocationPermission = async () => {
  let granted;
  try {
    if (Platform.OS === 'ios') {
      granted = true; // iOS permissions are requested in Info.plist
    } else {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'This app requires access to your location.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return granted;
  } catch (err) {
    console.warn(err);
    return false;
  }
};
