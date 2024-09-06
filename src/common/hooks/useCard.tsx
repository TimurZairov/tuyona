import {BASE_URL} from '../../config/config';
import {useAppContext} from '../../providers/context/context';
import {
  addToWishList,
  wishListAction,
} from '../../providers/redux/actions/wishListAction';
import {useAppDispatch} from '../../providers/redux/type';
import {postMethodApi} from '../postMethodApi';

const useCard = () => {
  const dispatch = useAppDispatch();
  const {accessToken, language} = useAppContext();

  const addToWishListItems = async (id: string) => {
    const response = await dispatch(
      addToWishList({data: {service_provider: id}, token: accessToken}),
    );

    if (!response) {
      throw new Error('что то пошло не так');
    }
    dispatch(wishListAction({accessToken, language}));
  };

  return {addToWishListItems};
};

export default useCard;

// fetch(BASE_URL + '/wishlist/', {
//   method: 'POST',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//     Authorization: 'Bearer ' + accessToken,
//   },
//   body: JSON.stringify({service_provider: item}),
// });
