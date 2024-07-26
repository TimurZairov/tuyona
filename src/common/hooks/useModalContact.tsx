import {useState} from 'react';

const useModalContact = () => {
  const [modal, setModal] = useState(false);

  const modalToggle = () => {
    setModal(prev => !prev);
  };

  return {modal, modalToggle};
};

export default useModalContact;
