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

type AppContextType = {
  accessToken: unknown | string;
  setAccessToken: Dispatch<SetStateAction<string | null>>;
  language: string;
  setLanguage: Dispatch<SetStateAction<string>>;
};

const AppContext = createContext<AppContextType>({
  accessToken: null,
  setAccessToken: () => {},
  language: 'ru',
  setLanguage: () => {},
});

type TAppContextProvider = {
  children: ReactNode;
};

export const AppContextProvider = ({children}: TAppContextProvider) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [language, setLanguage] = useState<string>('ru');

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

  return (
    <AppContext.Provider
      value={{accessToken, setAccessToken, language, setLanguage}}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
