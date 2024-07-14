import AsyncStorage from '@react-native-async-storage/async-storage';
import i18next from 'i18next';
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import {getMethodApi} from '../../common/getMethodApi';
import {Category} from '../../types/types';

type AppContextType = {
  accessToken: unknown | string;
  setAccessToken: Dispatch<SetStateAction<string | null>>;
  language: string;
  setLanguage: Dispatch<SetStateAction<string>>;
  categories: Category[];
};

const AppContext = createContext<AppContextType>({
  accessToken: null,
  setAccessToken: () => {},
  language: 'ru',
  setLanguage: () => {},
  categories: [],
});

type TAppContextProvider = {
  children: ReactNode;
};

export const AppContextProvider = ({children}: TAppContextProvider) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [language, setLanguage] = useState<string>('ru');
  const [categories, setCategories] = useState([]);
  //LANGUAGE
  useEffect(() => {
    (async () => {
      const isLanguage = await AsyncStorage.getItem('currentLanguage');
      if (!isLanguage) {
        i18next.changeLanguage('ru');
        return;
      }
      i18next.changeLanguage(isLanguage);
      setLanguage(isLanguage);
    })();
  }, []);

  //CATEGORIES

  useEffect(() => {
    (async () => {
      try {
        const response = await getMethodApi('/service-categories/', language);
        if (!response) {
          throw new Error('категории отсутствуют');
        }
        setCategories(response);
      } catch (error) {
        console.log('getCategories', error);
      }
    })();
  }, []);

  return (
    <AppContext.Provider
      value={{accessToken, setAccessToken, language, setLanguage, categories}}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
