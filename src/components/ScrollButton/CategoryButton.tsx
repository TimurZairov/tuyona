import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {COLORS} from '../../theme/theme';

import {Category} from '../../types/types';
import BackgroundBtn from '../../assets/icons/BackgroundBtn';
import BackgroundBtnL from '../../assets/icons/BackgroundBtnL';
import useCategoryListItems from '../../common/hooks/useCategoryListItems';

interface ICategoryProps {
  index: number;
  category: Category;
}

const CategoryButton: FC<ICategoryProps> = ({category, index}) => {
  const {getCategoryProvider} = useCategoryListItems();

  return (
    <View style={[styles.btn, (index + 1) % 2 === 0 && {marginRight: 4}]}>
      <Pressable
        style={[
          styles.imageWrapper,
          (index + 1) % 2 > 0
            ? {alignItems: 'flex-end'}
            : {alignItems: 'flex-start'},
        ]}
        onPress={() => getCategoryProvider(category.id, category.title)}>
        <View
          style={[
            styles.back,
            (index + 1) % 2 > 0 ? styles.leftRadius : styles.rightRadius,
          ]}>
          {category.photo && (
            <View
              style={
                (styles.image,
                (index + 1) % 2 > 0
                  ? {right: -3.5, bottom: -2}
                  : {left: -3.5, bottom: -2})
              }>
              <Image
                source={{uri: category?.photo}}
                style={[
                  {width: 60, height: 60},
                  (index + 1) % 2 > 0 ? styles.leftRadius : styles.rightRadius,
                ]}
              />
            </View>
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

  image: {
    ...StyleSheet.absoluteFillObject,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
