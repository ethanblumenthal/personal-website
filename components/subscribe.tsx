import { useRef, RefObject } from 'react';
import { X } from 'react-feather';

import { Button, ExitButton, OutlineButton } from '../elements/buttons';
import { ModalContainer, BackdropContainer } from '../elements/containers';
import useModal from '../hooks/useModal';

const Subscribe = ({ isOutline }) => {
  const node: RefObject<any> = useRef();
  const [modal, openModal] = useModal(node);

  const renderModal = () => (
    <>
      <ModalContainer ref={node}>
        <ExitButton onClick={() => openModal(false)}>
          <X />
        </ExitButton>

        <div style={{ paddingTop: '2rem' }}>
          <iframe
            src="https://cryptonomics.substack.com/embed"
            width="350"
            height="250"
            frameBorder="0"
            scrolling="no"
          />
        </div>
      </ModalContainer>
      <BackdropContainer />
    </>
  );

  return (
    <>
      {isOutline ? (
        <OutlineButton onClick={() => openModal(true)}>Subscribe</OutlineButton>
      ) : (
        <Button onClick={() => openModal(true)}>Subscribe</Button>
      )}

      {modal ? renderModal() : null}
    </>
  );
};

export default Subscribe;
