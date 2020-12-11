import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { SectionHeader, CardHeader, SubText } from '../elements/text';
import { ExitButton, ThemeButton, OutlineButton } from '../elements/buttons';
import { BackgroundContainer, ContentContainer, FlexContainer } from '../elements/containers';
import { SearchInput } from '../elements/inputs';
import { PAGES } from '../utils';

const Modal = styled.div`
  width: 20rem;
  position: fixed;
  top: 1rem;
  right: 1rem;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  padding: 2rem;
  z-index: 999;
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
  const router = useRouter();

  const openModal = () => {
    return (
      <Modal>
        <ExitButton onClick={() => setModal(false)}>
          <FontAwesomeIcon icon={faTimes} />
        </ExitButton>
        <SubText>Links</SubText>
        <UnorderedList>
          {PAGES.map(({ title, slug }) => (
            <Link href={slug} key={slug}>
              <ListItem style={{ color: router.pathname === slug ? '#8A99A8' : '' }}>
                <SectionHeader>{title}</SectionHeader>
              </ListItem>
            </Link>
          ))}
        </UnorderedList>

        <SubText>Change Theme</SubText>
        <ThemeButton onClick={() => setTheme('dark')}>Light</ThemeButton>
        <ThemeButton onClick={() => setTheme('light')}>Dark</ThemeButton>

        <SubText>Site Search</SubText>
        <SearchInput placeholder="Search articles" />
      </Modal>
    );
  };

  return (
    <BackgroundContainer short>
      <ContentContainer>
        <FlexContainer>
          <Link href="/">
            <CardHeader>Ethan Blumenthal</CardHeader>
          </Link>
          <OutlineButton onClick={() => setModal(true)}>Menu</OutlineButton>
          {modal ? openModal() : null}
        </FlexContainer>
      </ContentContainer>
    </BackgroundContainer>
  );
};

export default MobileNav;
