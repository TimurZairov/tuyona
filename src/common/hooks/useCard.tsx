import Toast from 'react-native-toast-message';
import {useAppContext} from '../../providers/context/context';
import {
  addToWishList,
  wishListAction,
} from '../../providers/redux/actions/wishListAction';
import {useAppDispatch, useAppSelector} from '../../providers/redux/type';
import {useState} from 'react';
import useMainScreenRequests from './useMainScreenReauests';
import useCategoryListItems from './useCategoryListItems';
import {setCategoryListItems} from '../../providers/redux/slices/categoryLIstSlice';

const useCard = () => {
  const dispatch = useAppDispatch();
  const {categoryListItems} = useAppSelector(state => state.categoryListItems);
  const {accessToken, language} = useAppContext();
  const [loading, setLoading] = useState(false);
  const {homePageData} = useMainScreenRequests();
  const {getCategoryProvider} = useCategoryListItems();

  const addToWishListItems = async (id: string) => {
    if (loading) {
      return;
    }
    const toggleFavorite = categoryListItems.map(item => {
      if (Number(item.id) === Number(id)) {
        return {
          ...item,
          in_wishlist: !item.in_wishlist,
        };
      }
      return item;
    });
    dispatch(setCategoryListItems(toggleFavorite));
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

  return {addToWishListItems};
};

export default useCard;
