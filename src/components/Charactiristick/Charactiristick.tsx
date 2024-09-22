import {StyleSheet, Text, View, Image} from 'react-native';
import React, {FC} from 'react';
import {COLORS} from '../../theme/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SvgUri} from 'react-native-svg';

const Charactiristick: FC<{
  serviceProvider: any;
  index: number;
  length: number;
  provider?: boolean;

  isShortInfo?: boolean;
}> = ({serviceProvider, index, length, isShortInfo}: any) => {
  const imageExtension = serviceProvider?.icon
    ?.toLowerCase()
    .slice(serviceProvider?.icon.length - 3);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.icons}>
          {imageExtension === 'png' ||
          imageExtension !== undefined ||
          imageExtension === 'jpg' ? (
            <Image
              source={{uri: serviceProvider?.icon}}
              width={14}
              height={14}
            />
          ) : (
            <SvgUri
              height={16}
              width={16}
              uri={serviceProvider?.icon}
              color={COLORS.blueColor}
            />
          )}
          <Text style={[styles.text, {marginLeft: 5}]}>
            {serviceProvider?.title.length > 15 && !isShortInfo
              ? serviceProvider?.title.slice(0, 15) + '...'
              : serviceProvider?.title}
          </Text>
        </View>
        {serviceProvider?.characteristic_type === 'TEXT' && (
          <Text style={styles.text}>{serviceProvider?.description}</Text>
        )}
        {serviceProvider?.characteristic_type === 'YES/NO' ? (
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
        ) : (
          <Text style={styles.text}>
            {serviceProvider?.char_value?.length > 15 && isShortInfo
              ? serviceProvider?.char_value?.slice(0, 15) + '...'
              : serviceProvider?.char_value}
          </Text>
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
