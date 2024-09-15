import {useState} from 'react';

const useAuth = () => {
  const [isSecured, setIsSecured] = useState(true);
  const disableSecuredInput = () => {
    setIsSecured(prevState => !prevState);
  };

  return {disableSecuredInput, isSecured};
};

export default useAuth;
