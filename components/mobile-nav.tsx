import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { SubText } from '../elements/text';
import { ExitButton, ThinButton } from '../elements/buttons';
import { PAGES } from '../utils';

const Modal = styled.div`
  width: 80vw;
  height: 80vh;
  /* margin: auto auto; */
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 5vh;
  left: 2.5vh;
  background-color: white;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  padding: 2rem;
`;

const UnorderedList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const ListItem = styled.li`
  font-size: 1.2rem;
  margin-right: 1.5rem;
  transition: ${({ theme }) => theme.transitions.ease};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.grey};
  }
`;

const MobileNav = ({ setTheme }) => {
  const [modal, setModal] = useState(false);

  if (modal) {
    return (
      <Modal>
        <ExitButton onClick={() => setModal(false)}>
          <FontAwesomeIcon icon={faTimes} />
        </ExitButton>
        <SubText>Links</SubText>
        <UnorderedList>
          {PAGES.map(({ title, slug }) => (
            <Link href={slug} key={slug}>
              <ListItem>{title}</ListItem>
            </Link>
          ))}
        </UnorderedList>

        <SubText>Change Theme</SubText>
        <button onClick={() => setTheme('dark')}>Light</button>
        <button onClick={() => setTheme('light')}>Dark</button>

        <SubText>Site Search</SubText>
        <input placeholder="Search articles" />
      </Modal>
    );
  } else {
    return <ThinButton onClick={() => setModal(true)}>Menu</ThinButton>;
  }
};

export default MobileNav;
