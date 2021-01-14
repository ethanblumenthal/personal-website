import { useRef, RefObject } from 'react';
import { X } from 'react-feather';

import { ExitButton, OutlineButton } from '../elements/buttons';
import { ModalContainer, BackdropContainer } from '../elements/containers';
import useModal from '../hooks/useModal';

const Subscribe = () => {
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
            src="https://ethanblumenthal.substack.com/embed"
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
      <OutlineButton onClick={() => openModal(true)}>Subscribe</OutlineButton>
      {modal ? renderModal() : null}
    </>
  );
};

export default Subscribe;
