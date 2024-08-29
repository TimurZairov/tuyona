import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../theme/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SvgUri} from 'react-native-svg';

const Charactiristick = ({serviceProvider, index, length}: any) => {
  return (
    <View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <SvgUri
              height={16}
              width={16}
              uri={serviceProvider?.icon}
              color={COLORS.blueColor}
            />

            <Text
              style={{
                fontSize: 12,
                color: COLORS.blackColor,
                fontWeight: '300',
              }}>
              {serviceProvider?.title}
            </Text>
          </View>
          {serviceProvider?.characteristic_type === 'TEXT' && (
            <Text
              style={{
                fontSize: 12,
                color: COLORS.blackColor,
                fontWeight: '300',
              }}>
              {serviceProvider?.description}
            </Text>
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
        {length && length - 1 === index ? null : (
          <View
            style={{
              width: '100%',
              borderWidth: 0.5,
              marginVertical: 3,
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
