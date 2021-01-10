import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, RefObject } from 'react';

import { ExitButton, OutlineButton, ThemeButton } from '../elements/buttons';
import {
  ModalContainer,
  BackdropContainer,
  MobileWrapper,
  DesktopWrapper,
} from '../elements/containers';
import useModal from '../hooks/useModal';

const Subscribe = () => {
  const node: RefObject<any> = useRef();
  const [modal, openModal] = useModal(node);

  const renderModal = () => (
    <>
      <ModalContainer ref={node}>
        <ExitButton onClick={() => openModal(false)}>
          <FontAwesomeIcon icon={faTimes} />
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
