import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faMediumM, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

import { BackgroundContainer, FlexContainer, ContentContainer } from '../elements/containers';
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
          <Image src={'/logo.svg'} alt={'Ethan Blumenthal'} width={50} height={50} />

          <div>
            <Link href="/">
              <SubText style={{ cursor: 'pointer' }}>
                &copy; {new Date().getFullYear()} Ethan Blumenthal
              </SubText>
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
          </div>
        </FlexContainer>
      </ContentContainer>
    </BackgroundContainer>
  </footer>
);

export default Footer;
