import Link from 'next/link';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faMediumM, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

import { FooterHeader, FooterText } from '../elements/text';
import { BackgroundContainer, FlexContainer, ContentContainer } from '../elements/containers';
import { SquareButton } from '../elements/buttons';
import { SubscribeInput } from '../elements/inputs';
import { SubText } from '../elements/text';

const Socials = styled.div`
  display: flex;
  padding: 1rem;

  & > a {
    margin-right: 0.75rem;
  }
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
    <BackgroundContainer color="secondary" short>
      <ContentContainer>
        <FlexContainer>
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
        </FlexContainer>
      </ContentContainer>
    </BackgroundContainer>

    <BackgroundContainer color="secondary">
      <ContentContainer>
        <FlexContainer>
          <div>
            <FooterHeader>Want more tips and tricks?</FooterHeader>
            <FooterText>Sign up for the newsletter to stay up-to-date.</FooterText>
          </div>

          <div>
            <SubscribeInput placeholder="Enter your email address" />
            <SquareButton>Subscribe</SquareButton>
          </div>
        </FlexContainer>
      </ContentContainer>
    </BackgroundContainer>
  </footer>
);

export default Footer;
