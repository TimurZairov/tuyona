import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {Dispatch, SetStateAction, useState} from 'react';
import {COLORS} from '../../theme/theme';
import {SvgUri} from 'react-native-svg';
import {ICategory} from '../../types/types';

import {ServiceListNavigationProp} from '../../navigation/types';

interface ICategoryProps {
  filter: (id: number, setActive: Dispatch<SetStateAction<boolean>>) => void;
}

const ScrollButton = ({category, food, filter}: ICategory & ICategoryProps) => {
  const [active, setActive] = useState(false);

  return (
    <View style={[styles.btn]}>
      <Pressable
        style={[
          styles.imageWrapper,
          {backgroundColor: active ? COLORS.blueColor : COLORS.mainColor},
        ]}
        onPress={() => filter(category.id, setActive)}>
        {/* <Image source={category.image} style={styles.image} /> */}
        {category && category.icon && (
          <SvgUri
            height={40}
            width={40}
            uri={category.icon}
            style={{marginRight: 8}}
          />
        )}
        <Text style={styles.title}>{category.title}</Text>
      </Pressable>
    </View>
  );
};

export default ScrollButton;

const styles = StyleSheet.create({
  btn: {
    marginRight: 6,
    // width: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    borderRadius: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.borderColor,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'center',
  },
});
