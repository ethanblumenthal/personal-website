import { useEffect, useState } from 'react';

const useModal = (node) => {
  const [modal, openModal] = useState<any>(false);

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
