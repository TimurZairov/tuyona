import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TextInput} from 'react-native-gesture-handler';
import {COLORS} from '../../theme/theme';
import Button from '../../components/Button/Button';
import {BASE_URL} from '../../config/config';

const RegisterScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  //REGISTRY
  const registerHandler = async () => {
    console.log(firstName, lastName, username, password);
    const newUser = {
      firstName,
      lastName,
      username,
      password,
      password2,
    };
    try {
      const res = await fetch(`${BASE_URL}/users/register/`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={{paddingHorizontal: 8}}>
      <View>
        <Text style={{textAlign: 'center', marginVertical: 20}}>TUYONA</Text>
      </View>
      {/* REG */}
      <View
        style={{
          backgroundColor: COLORS.mainColor,
          height: 50,
          borderRadius: 10,
          justifyContent: 'center',
          paddingHorizontal: 12,
          marginVertical: 10,
        }}>
        <TextInput
          style={{height: '100%', width: '100%'}}
          placeholder="first_name"
          onChangeText={setFirstName}
        />
      </View>
      <View
        style={{
          backgroundColor: COLORS.mainColor,
          height: 50,
          borderRadius: 10,
          justifyContent: 'center',
          paddingHorizontal: 12,
          marginVertical: 10,
        }}>
        <TextInput
          style={{height: '100%', width: '100%'}}
          placeholder="last_name"
          onChangeText={setLastName}
        />
      </View>
      <View
        style={{
          backgroundColor: COLORS.mainColor,
          height: 50,
          borderRadius: 10,
          justifyContent: 'center',
          paddingHorizontal: 12,
          marginVertical: 10,
        }}>
        <TextInput
          style={{height: '100%', width: '100%'}}
          placeholder="username"
          onChangeText={setUsername}
        />
      </View>
      <View
        style={{
          backgroundColor: COLORS.mainColor,
          height: 50,
          borderRadius: 10,
          justifyContent: 'center',
          paddingHorizontal: 12,
          marginVertical: 10,
        }}>
        <TextInput
          style={{height: '100%', width: '100%'}}
          placeholder="password"
          onChangeText={setPassword}
        />
      </View>
      <View
        style={{
          backgroundColor: COLORS.mainColor,
          height: 50,
          borderRadius: 10,
          justifyContent: 'center',
          paddingHorizontal: 12,
          marginVertical: 10,
        }}>
        <TextInput
          style={{height: '100%', width: '100%'}}
          placeholder="password2"
          onChangeText={setPassword2}
        />
      </View>
      <Button onPress={registerHandler}>Register</Button>
    </SafeAreaView>
  );
};

// {
//     "first_name": "string",
//     "last_name": "string",
//     "username": "string",
//     "password": "string",
//     "password2": "string"
//   }

export default RegisterScreen;

const styles = StyleSheet.create({});
