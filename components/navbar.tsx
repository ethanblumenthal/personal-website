import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

import { OutlineButton } from '../elements/buttons';
import { CardHeader } from '../elements/text';
import { BackgroundContainer, FlexContainer } from '../elements/containers';
import { PAGES } from '../utils';

const Container = styled.div`
  display: flex;
  align-items: center;

  & > svg {
    cursor: pointer;
    margin-right: 1.5rem;
  }
`;

const UnorderedList = styled.ul`
  display: flex;
  list-style: none;
`;

const ListItem = styled.li`
  font-size: 1.2rem;
  margin-right: 1.5rem;
  transition: ${({ theme }) => theme.transitions.ease};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.lightBlue};
  }
`;

const NavBar = ({ theme, setTheme }) => {
  const router = useRouter();

  return (
    <BackgroundContainer short>
      <FlexContainer>
        <Container>
          <Link href="/">
            <CardHeader>Ethan Blumenthal</CardHeader>
          </Link>

          <UnorderedList>
            {PAGES.map(({ title, slug }) => (
              <Link href={slug} key={slug}>
                <ListItem style={{ color: router.pathname === slug ? '#5993C2' : '' }}>
                  {title}
                </ListItem>
              </Link>
            ))}
          </UnorderedList>
        </Container>

        <Container>
          <FontAwesomeIcon icon={faSearch} size="lg" />
          <FontAwesomeIcon icon={theme === 'dark' ? faMoon : faSun} size="lg" onClick={setTheme} />
          <OutlineButton>Subscribe</OutlineButton>
        </Container>
      </FlexContainer>
    </BackgroundContainer>
  );
};

export default NavBar;
