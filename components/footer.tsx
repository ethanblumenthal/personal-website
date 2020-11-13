import Link from 'next/link';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faMedium, faGithub } from '@fortawesome/free-brands-svg-icons';

const Container = styled.div``;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 4rem;
`;

const Column = styled.div``;

const Socials = styled.div`
  display: flex;

  & > a {
    margin-right: 0.5rem;
  }
`;

const Footer = () => (
  <Container>
    <Row style={{ backgroundColor: '#0074B7' }}>
      <p>&copy; {new Date().getFullYear()} Ethan Blumenthal</p>

      <Socials>
        <a href="https://www.linkedin.com/in/ethanblumenthal/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>

        <a href="https://medium.com/@ethanblumenthal" target="_blank">
          <FontAwesomeIcon icon={faMedium} />
        </a>

        <a href="https://github.com/ethanblumenthal" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </Socials>
    </Row>

    <Row style={{ backgroundColor: '#003B73' }}>
      <Column>
        <p>Want more tips and tricks?</p>
        <p>Sign up for the newsletter to stay up-to-date</p>
      </Column>

      <Column>
        <input />
        <button>Subscribe</button>
      </Column>
    </Row>
  </Container>
);

export default Footer;
