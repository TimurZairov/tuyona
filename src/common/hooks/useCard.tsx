import Toast from 'react-native-toast-message';
import {useAppContext} from '../../providers/context/context';
import {
  addToWishList,
  removeFromWishList,
  wishListAction,
} from '../../providers/redux/actions/wishListAction';
import {useAppDispatch} from '../../providers/redux/type';
import {useState} from 'react';

const useCard = () => {
  const dispatch = useAppDispatch();
  const {accessToken, language} = useAppContext();
  const [loading, setLoading] = useState(false);

  const addToWishListItems = async (id: string) => {
    if (loading) {
      return;
    }

    try {
      setLoading(true);
      if (!accessToken) {
        Toast.show({
          type: 'info',
          text1: 'Авторизируйтесь',
        });
        setLoading(false);
        return;
      }

      const response = await dispatch(
        addToWishList({data: id, token: accessToken}),
      );

      if (!response) {
        throw new Error('что то пошло не так');
      }
      dispatch(wishListAction({accessToken, language}));
    } catch (error) {
      console.log(error, 'add to wishlist');
    } finally {
      setLoading(false);
    }
  };

  const removeItemsFromWishList = async (id: string) => {
    if (!accessToken) {
      Toast.show({
        type: 'info',
        text1: 'Авторизируйтесь',
      });
      return;
    }
    const response = await dispatch(
      removeFromWishList({id, token: accessToken}),
    );

    if (!response) {
      throw new Error('что то пошло не так');
    }
    dispatch(wishListAction({accessToken, language}));
  };

  return {addToWishListItems, removeItemsFromWishList};
};

export default useCard;
