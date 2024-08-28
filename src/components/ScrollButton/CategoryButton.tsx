import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import {COLORS} from '../../theme/theme';
import {SvgUri} from 'react-native-svg';
import {ICategory} from '../../types/types';
import BackgroundBtn from '../../assets/icons/BackgroundBtn';
import BackgroundBtnL from '../../assets/icons/BackgroundBtnL';

interface ICategoryProps {
  index: number;
}

const CategoryButton: FC<ICategory & ICategoryProps> = ({category, index}) => {
  return (
    <View style={[styles.btn, (index + 1) % 2 === 0 && {marginRight: 4}]}>
      <Pressable
        style={[
          styles.imageWrapper,
          (index + 1) % 2 > 0
            ? {alignItems: 'flex-end'}
            : {alignItems: 'flex-start'},
        ]}>
        <View
          style={[
            styles.back,
            (index + 1) % 2 > 0 ? styles.leftRadius : styles.rightRadius,
          ]}>
          {category && category.icon && (
            <SvgUri
              height={35}
              width={35}
              uri={category.icon}
              style={{marginRight: 8}}
            />
          )}
        </View>
        {(index + 1) % 2 > 0 ? <BackgroundBtn /> : <BackgroundBtnL />}
      </Pressable>
      <Text style={styles.title}>{category.title}</Text>
    </View>
  );
};

export default CategoryButton;

const styles = StyleSheet.create({
  btn: {
    marginRight: -1,
    width: 72,
    height: 137,
  },
  imageWrapper: {},
  title: {
    fontSize: 12,
    fontWeight: '300',
    textAlign: 'center',
    marginTop: 6,
  },
  back: {
    width: 70,
    height: 70,
    backgroundColor: COLORS.mainColor,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    padding: 4,
  },
  leftRadius: {
    borderTopRightRadius: 35,
    borderBottomRightRadius: 35,
    borderBottomLeftRadius: 35,
    borderTopLeftRadius: 5,
    right: 3,
    bottom: 2,
  },
  rightRadius: {
    borderTopLeftRadius: 35,
    borderBottomRightRadius: 35,
    borderBottomLeftRadius: 35,
    borderTopRightRadius: 5,
    left: 3,
    bottom: 2,
  },
});

//FILTER
// const filter = (
//   id: number,
//   cb: React.Dispatch<React.SetStateAction<boolean>>,
// ) => {
//   cb(prevState => !prevState);
//   setSelectedIds(prevIds => {
//     const updatedIds = prevIds.includes(id)
//       ? prevIds.filter(item => item !== id)
//       : [...prevIds, id];

//     // Update filterCategory based on selectedIds
//     const updatedFilterCategory =
//       updatedIds.length === 0
//         ? oldCategory
//         : oldCategory.filter(category => updatedIds.includes(category.id));

//     setFilterCategory(updatedFilterCategory);

//     return updatedIds;
//   });
// };
