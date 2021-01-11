import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

import { CardHeader } from '../elements/text';
import { BackgroundContainer, FlexContainer, IconContainer } from '../elements/containers';
import { PAGES } from '../utils';
import Subscribe from './subscribe';

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
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const NavBar = ({ theme, setTheme }) => {
  const router = useRouter();

  return (
    <BackgroundContainer short>
      <FlexContainer>
        <FlexContainer>
          <Link href="/">
            <CardHeader style={{ cursor: 'pointer' }}>Ethan Blumenthal</CardHeader>
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
        </FlexContainer>

        <FlexContainer style={{ width: '12rem' }}>
          <Link href="/tags">
            <IconContainer>
              <FontAwesomeIcon icon={faSearch} size="lg" />
            </IconContainer>
          </Link>
          <IconContainer>
            <FontAwesomeIcon
              icon={theme === 'dark' ? faMoon : faSun}
              size="lg"
              onClick={setTheme}
            />
          </IconContainer>
          <Subscribe />
        </FlexContainer>
      </FlexContainer>
    </BackgroundContainer>
  );
};

export default NavBar;
