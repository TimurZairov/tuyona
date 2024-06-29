import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TextInput} from 'react-native-gesture-handler';
import {COLORS} from '../../theme/theme';
import Button from '../../components/Button/Button';

const RegisterScreen = () => {
  const registerHandler = () => {
    console.log('ok');
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
