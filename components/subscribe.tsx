import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, RefObject } from 'react';
import styled from 'styled-components';

import { ExitButton, OutlineButton } from '../elements/buttons';
import useModal from '../hooks/useModal';

const Modal = styled.div`
  width: 30rem;
  position: fixed;
  top: 1rem;
  right: 1rem;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  padding: 2rem;
  z-index: 999;
  text-align: center;
`;

const Subscribe = () => {
  const node: RefObject<any> = useRef();
  const [modal, openModal] = useModal(node);

  const renderModal = () => (
    <Modal ref={node}>
      <ExitButton onClick={() => openModal(false)}>
        <FontAwesomeIcon icon={faTimes} />
      </ExitButton>

      <iframe
        src="https://ethanblumenthal.substack.com/embed"
        width="350"
        height="250"
        frameBorder="0"
        scrolling="no"
      ></iframe>
    </Modal>
  );

  return (
    <>
      <OutlineButton onClick={() => openModal(true)}>Subscribe</OutlineButton>
      {modal ? renderModal() : null}
    </>
  );
};

export default Subscribe;
