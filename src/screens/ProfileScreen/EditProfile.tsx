import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Input from '../../components/Input/Input';
import {COLORS} from '../../theme/theme';
import {useAppSelector} from '../../providers/redux/type';
import {User} from '../../types/types';
import Button from '../../components/Button/Button';

interface IUser {
  user: User;
}

const EditProfile = () => {
  const {user} = useAppSelector(state => state.user);
  const [userName, setUserName] = useState<string | undefined>(
    user?.first_name,
  );
  const [lastName, setLastName] = useState(user?.last_name);
  const [phoneNumber, setPhoneNumber] = useState(user?.phone_number);

  return (
    <View style={styles.container}>
      <Input
        placeholder="Имя"
        value={userName}
        setValue={setUserName}
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
      <Button style={styles.btn}>Сохранить</Button>
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
