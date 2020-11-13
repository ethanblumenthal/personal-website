import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faMedium, faGithub } from '@fortawesome/free-brands-svg-icons';

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme, top }) => (top ? theme.colors.primary : theme.colors.secondary)};
  padding: 2rem 8rem;
`;

const Column = styled.div``;

const Socials = styled.div`
  display: flex;

  & > a {
    margin-right: 0.5rem;
  }
`;

const Footer = () => (
  <footer>
    <Row top>
      <p>&copy; {new Date().getFullYear()} Ethan Blumenthal</p>

      <Socials>
        <a href="https://www.linkedin.com/in/ethanblumenthal/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>

        <a href="https://medium.com/@ethanblumenthal" target="_blank">
          <FontAwesomeIcon icon={faMedium} size="2x" />
        </a>

        <a href="https://github.com/ethanblumenthal" target="_blank">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </Socials>
    </Row>

    <Row>
      <Column>
        <p>Want more tips and tricks?</p>
        <p>Sign up for the newsletter to stay up-to-date</p>
      </Column>

      <Column>
        <input />
        <button>Subscribe</button>
      </Column>
    </Row>
  </footer>
);

export default Footer;
