import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../theme/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SvgUri} from 'react-native-svg';

const Charactiristick = ({serviceProvider, index, length}: any) => {
  // console.log(JSON.stringify(serviceProvider, null, 2));
  return (
    <View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row'}}>
            <SvgUri
              height={18}
              width={18}
              uri={serviceProvider?.icon}
              color={COLORS.blueColor}
            />

            <Text>{serviceProvider?.title}</Text>
          </View>
          {serviceProvider?.characteristic_type === 'TEXT' && (
            <Text>{serviceProvider?.description}</Text>
          )}
          {serviceProvider?.characteristic_type === 'YES/NO' && (
            <View>
              <Ionicons
                name={
                  serviceProvider?.description === '-' ? 'close' : 'checkmark'
                }
                color={
                  serviceProvider?.description === '-'
                    ? COLORS.blueColor
                    : 'red'
                }
                size={18}
                style={{marginRight: 10}}
              />
            </View>
          )}
        </View>
        {length - 1 === index ? null : (
          <View
            style={{
              width: '100%',
              borderWidth: 0.5,
              marginVertical: 10,
              borderColor: COLORS.grayColor,
            }}
          />
        )}
      </View>
    </View>
  );
};

export default Charactiristick;

const styles = StyleSheet.create({});
