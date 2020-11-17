import Link from 'next/link';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faMediumM, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

import { SquareButton } from '../elements/buttons';
import { SubscribeInput } from '../elements/inputs';
import { SubText } from '../elements/text';
import { devices } from '../utils';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme, top }) => (top ? theme.colors.primary : theme.colors.secondary)};
  padding: 4rem 1rem;

  @media ${devices.laptop} {
    padding: 2rem 8rem;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Socials = styled.div`
  display: flex;
  padding: 1rem;

  & > a {
    margin-right: 0.75rem;
  }
`;

const Header = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 0;
`;

const Text = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.grey};
  line-height: 1.5rem;
  margin-top: 0.5rem;
`;

const Anchor = styled.a`
  & > svg {
    color: ${({ theme }) => theme.colors.grey};
    transition: ${({ theme }) => theme.transitions.ease};
  }

  &:hover > svg {
    color: ${({ theme }) => theme.colors.button};
  }
`;

const Footer = () => (
  <footer>
    <Container top>
      <Link href="/">
        <SubText>&copy; {new Date().getFullYear()} Ethan Blumenthal</SubText>
      </Link>

      <Socials>
        <Anchor href="https://www.linkedin.com/in/ethanblumenthal/" target="_blank">
          <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
        </Anchor>

        <Anchor href="https://medium.com/@ethanblumenthal" target="_blank">
          <FontAwesomeIcon icon={faMediumM} size="lg" />
        </Anchor>

        <Anchor href="https://github.com/ethanblumenthal" target="_blank">
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </Anchor>

        <Anchor href="https://www.instagram.com/ethan_blumenthal" target="_blank">
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </Anchor>
      </Socials>
    </Container>

    <Container>
      <div>
        <Header>Want more tips and tricks?</Header>
        <Text>Sign up for the newsletter to stay up-to-date.</Text>
      </div>

      <div>
        <SubscribeInput placeholder="Enter your email address" />
        <SquareButton>Subscribe</SquareButton>
      </div>
    </Container>
  </footer>
);

export default Footer;
