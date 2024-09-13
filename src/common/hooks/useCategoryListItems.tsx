import {useNavigation} from '@react-navigation/native';
import {useAppContext} from '../../providers/context/context';
import {useAppDispatch} from '../../providers/redux/type';
import {getMethodApi} from '../getMethodApi';
import {useState} from 'react';
import {setCategoryListItems} from '../../providers/redux/slices/categoryLIstSlice';

const useCategoryListItems = () => {
  const [loading, setLoading] = useState(false);
  const {language, accessToken} = useAppContext();
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const getCategoryProvider = async (id: any, title: string) => {
    if (loading) {
      return;
    }

    setLoading(true);
    try {
      const result = await getMethodApi(
        `/service-providers/?category=${id}`,
        language,
        accessToken,
      );

      const categoryListItems = await result;

      if (!categoryListItems) {
        throw new Error('filtered action');
      }

      dispatch(setCategoryListItems(categoryListItems?.results));

      navigation.navigate('ServiceList', {title, filterId: id});
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return {getCategoryProvider, loading};
};

export default useCategoryListItems;
