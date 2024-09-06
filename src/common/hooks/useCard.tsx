import {BASE_URL} from '../../config/config';
import {useAppContext} from '../../providers/context/context';
import {addToWishList} from '../../providers/redux/actions/wishListAction';
import {useAppDispatch} from '../../providers/redux/type';

const useCard = () => {
  const dispatch = useAppDispatch();
  const {accessToken} = useAppContext();

  const addToWishListItems = async (item: any, token: string) => {
    const response = await fetch(BASE_URL + '/wishlist/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + accessToken,
      },
      body: JSON.stringify({service: item}),
    });
  };

  return {addToWishListItems};
};

export default useCard;
