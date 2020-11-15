import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faMediumM, faGithub } from '@fortawesome/free-brands-svg-icons';

import { SquareButton } from '../elements/buttons';
import { SubText } from '../elements/text';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme, top }) => (top ? theme.colors.primary : theme.colors.secondary)};
  padding: 2rem 8rem;
`;

const Socials = styled.div`
  display: flex;
  padding: 1rem;

  & > a {
    margin-right: 0.75rem;
  }
`;

const Input = styled.input`
  width: 20rem;
  border: none;
  font-size: 1.1rem;
  border-radius: 0.25rem;
  background-color: ${({ theme }) => theme.colors.primary};
  outline-color: ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.grey};
  padding: 1rem 1rem;
  margin-right: 1rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey};
  }
`;

export const Header = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 0;
`;

export const Text = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.grey};
  line-height: 1.5rem;
  margin-top: 0.5rem;
`;

const Footer = () => (
  <footer>
    <Container top>
      <SubText>&copy; {new Date().getFullYear()} Ethan Blumenthal</SubText>

      <Socials>
        <a href="https://www.linkedin.com/in/ethanblumenthal/" target="_blank">
          <FontAwesomeIcon icon={faLinkedinIn} size="lg" color={'#8A99A8'} />
        </a>

        <a href="https://medium.com/@ethanblumenthal" target="_blank">
          <FontAwesomeIcon icon={faMediumM} size="lg" color={'#8A99A8'} />
        </a>

        <a href="https://github.com/ethanblumenthal" target="_blank">
          <FontAwesomeIcon icon={faGithub} size="lg" color={'#8A99A8'} />
        </a>
      </Socials>
    </Container>

    <Container>
      <div>
        <Header>Want more tips and tricks?</Header>
        <Text>Sign up for the newsletter to stay up-to-date.</Text>
      </div>

      <div>
        <Input placeholder="Enter your email address" />
        <SquareButton>Subscribe</SquareButton>
      </div>
    </Container>
  </footer>
);

export default Footer;
