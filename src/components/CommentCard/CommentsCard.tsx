import {Image, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {COLORS} from '../../theme/theme';
import {Rating} from '@kolking/react-native-rating';

interface IComment {
  comment: {
    id: number;
    rating: string;
    comment: string;
    created_at: string;
    created_user: {
      id: number;
      first_name: string;
      last_name: string;
      avatar: string;
    };
  };
}

const CommentsCard: FC<IComment> = ({comment}) => {
  const date = new Date(comment.created_at);

  // Преобразуем в удобный формат
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const formattedDate = date.toLocaleString('en-US', options);

  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: COLORS.grayColor,
        padding: 12,
        borderRadius: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          source={{uri: comment.created_user.avatar}}
          style={styles.image}
        />
        <View>
          <View style={{flexDirection: 'row', columnGap: 3, marginBottom: 3}}>
            <Text style={{fontSize: 12, fontWeight: '300'}}>
              {comment.created_user.first_name}
            </Text>
            <Text style={{fontSize: 12, fontWeight: '400'}}>
              {comment.created_user.last_name}
            </Text>
          </View>
          <Rating
            size={12}
            rating={Number(comment.rating)}
            fillColor={COLORS.blueColor}
            baseColor={COLORS.lightGray}
            disabled
          />
        </View>
      </View>
      <View style={{marginTop: 10}}>
        <Text style={{fontSize: 14, fontWeight: '200'}}>{comment.comment}</Text>

        <Text style={{fontSize: 10, fontWeight: '200', marginTop: 10}}>
          {formattedDate}
        </Text>
      </View>
    </View>
  );
};

export default CommentsCard;

const styles = StyleSheet.create({
  image: {
    width: 30,
    aspectRatio: 1,
    borderRadius: 15,
    marginRight: 6,
  },
});
