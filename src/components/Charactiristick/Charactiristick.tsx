import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {COLORS} from '../../theme/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SvgUri} from 'react-native-svg';

const Charactiristick: FC<{
  serviceProvider: any;
  index: number;
  length: number;
  provider?: boolean;
}> = ({serviceProvider, index, length, provider}: any) => {
  // console.log(JSON.stringify(serviceProvider, null, 2));

  return (
    <>
      <View style={styles.container}>
        <View style={styles.icons}>
          <SvgUri
            height={16}
            width={16}
            uri={serviceProvider?.icon}
            color={COLORS.blueColor}
          />

          <Text style={[styles.text, {marginLeft: 5}]}>
            {serviceProvider?.title.length > 15 && !provider
              ? serviceProvider?.title.slice(0, 15) + '...'
              : serviceProvider?.title}
          </Text>
        </View>
        {serviceProvider?.characteristic_type === 'TEXT' && (
          <Text style={styles.text}>{serviceProvider?.description}</Text>
        )}
        {serviceProvider?.characteristic_type === 'YES/NO' && (
          <View>
            <Ionicons
              name={
                serviceProvider?.description === '-' ? 'close' : 'checkmark'
              }
              color={
                serviceProvider?.description === '-' ? COLORS.blueColor : 'red'
              }
              size={16}
              style={styles.icon}
            />
          </View>
        )}
      </View>
      {length && length - 1 === index ? null : <View style={styles.divider} />}
    </>
  );
};

export default Charactiristick;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icons: {flexDirection: 'row', alignItems: 'center'},
  text: {
    fontSize: 12,
    color: COLORS.blackColor,
    fontWeight: '300',
  },
  icon: {marginRight: 8},
  divider: {
    width: '100%',
    borderWidth: 0.5,
    marginVertical: 3,
    borderColor: COLORS.grayColor,
  },
});
