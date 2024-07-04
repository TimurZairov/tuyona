import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
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
  language: '',
  setLanguage: () => {},
});

type TAppContextProvider = {
  children: ReactNode;
};

export const AppContextProvider = ({children}: TAppContextProvider) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [language, setLanguage] = useState('ru');

  console.log(accessToken);
  return (
    <AppContext.Provider
      value={{accessToken, setAccessToken, language, setLanguage}}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
