import { useEffect, useState } from 'react';

const useModal = (node) => {
  const [modal, openModal] = useState<any>(false);

  useEffect(() => {
    modal ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto');
  }, [useModal]);

  const handleClick = (e) => {
    if (node?.current?.contains(e.target)) {
      return;
    }
    openModal(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return [modal, openModal];
};
export default useModal;
