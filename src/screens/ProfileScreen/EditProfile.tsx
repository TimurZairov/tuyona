import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Input from '../../components/Input/Input';
import {COLORS} from '../../theme/theme';
import {useAppDispatch, useAppSelector} from '../../providers/redux/type';
import {User} from '../../types/types';
import Button from '../../components/Button/Button';
import {userEdit} from '../../providers/redux/actions/userAction';
import {useAppContext} from '../../providers/context/context';
import {useNavigation} from '@react-navigation/native';

const EditProfile = () => {
  const {user} = useAppSelector(state => state.user);
  const {accessToken} = useAppContext();
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState<string | undefined>(
    user?.first_name,
  );
  const [lastName, setLastName] = useState(user?.last_name);
  const [phoneNumber, setPhoneNumber] = useState(user?.phone_number);

  const updateUserData = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    const usersData = {
      first_name: firstName,
      last_name: lastName,
      phone_number: phoneNumber,
      username: user?.username,
    };
    if (accessToken) {
      await dispatch(
        userEdit({data: usersData, token: accessToken.toString()}),
      );
    }
    setLoading(false);
    setTimeout(() => {
      navigation.goBack();
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Имя"
        value={firstName}
        setValue={setFirstName}
        inputStyle={styles.input}
      />
      <Input
        placeholder="Фамилия"
        value={lastName}
        setValue={setLastName}
        inputStyle={styles.input}
      />
      <Input
        placeholder="Номер телефона"
        value={phoneNumber}
        setValue={setPhoneNumber}
        inputStyle={styles.input}
      />
      <Button style={styles.btn} onPress={updateUserData} loading={loading}>
        Сохранить
      </Button>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.mainColor,
    padding: 8,
  },
  input: {
    marginBottom: 10,
  },

  btn: {
    borderRadius: 10,
    marginVertical: 10,
  },
});
