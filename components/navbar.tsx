import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

import { OutlineButton } from '../elements/buttons';
import { PAGES } from '../utils';

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8rem;
`;

const Container = styled.div`
  display: flex;
  align-items: center;

  & > svg {
    cursor: pointer;
    margin-right: 1.5rem;
  }
`;

const Header = styled.h1`
  cursor: pointer;
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
    color: ${({ theme }) => theme.colors.grey};
  }
`;

const NavBar = ({ theme, setTheme }) => {
  const router = useRouter();

  return (
    <Nav>
      <Container>
        <Link href="/">
          <Header>Ethan Blumenthal</Header>
        </Link>

        <UnorderedList>
          {PAGES.map(({ title, slug }) => (
            <Link href={slug} key={slug}>
              <ListItem style={{ color: router.pathname === slug ? '#8A99A8' : '' }}>
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
    </Nav>
  );
};

export default NavBar;
