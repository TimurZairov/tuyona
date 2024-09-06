import Toast from 'react-native-toast-message';
import {useAppContext} from '../../providers/context/context';
import {
  addToWishList,
  removeFromWishList,
  wishListAction,
} from '../../providers/redux/actions/wishListAction';
import {useAppDispatch} from '../../providers/redux/type';

const useCard = () => {
  const dispatch = useAppDispatch();
  const {accessToken, language} = useAppContext();

  const addToWishListItems = async (id: string) => {
    if (!accessToken) {
      Toast.show({
        type: 'info',
        text1: 'Авторизируйтесь',
      });
      return;
    }
    const response = await dispatch(
      addToWishList({data: {service_provider: id}, token: accessToken}),
    );

    if (!response) {
      throw new Error('что то пошло не так');
    }
    dispatch(wishListAction({accessToken, language}));
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
