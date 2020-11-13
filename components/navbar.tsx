import Link from 'next/link';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faSearch, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

import { Button } from '../elements/buttons';

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;
`;

const Container = styled.div`
  display: flex;
  align-items: center;

  & > svg {
    cursor: pointer;
    margin-right: 1rem;
  }
`;

const Header = styled.h1`
  cursor: pointer;
`;

const UnorderedList = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  font-size: 1.2rem;
  margin-right: 1rem;
  cursor: pointer;

  &:hover {
    color: grey;
  }
`;

const PAGES = [
  { title: 'Home', slug: '/' },
  { title: 'Blog', slug: '/blog' },
  { title: 'About', slug: '/about' },
  { title: 'Work', slug: '/work' },
];

const NavBar = ({ theme, setTheme }) => (
  <Nav>
    <Container>
      <FontAwesomeIcon icon={faCode} />
      <Link href="/">
        <Header>Ethan Blumenthal</Header>
      </Link>

      <UnorderedList>
        {PAGES.map(({ title, slug }) => (
          <Link href={slug} key={slug}>
            <ListItem>{title}</ListItem>
          </Link>
        ))}
      </UnorderedList>
    </Container>

    <Container>
      <FontAwesomeIcon icon={faSearch} />
      <FontAwesomeIcon icon={theme === 'dark' ? faMoon : faSun} onClick={setTheme} />
      <Button>Subscribe</Button>
    </Container>
  </Nav>
);

export default NavBar;
