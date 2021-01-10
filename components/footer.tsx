import Image from 'next/image';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faMediumM, faGithub } from '@fortawesome/free-brands-svg-icons';

import {
  BackgroundContainer,
  FlexContainer,
  ContentContainer,
  FlexEvenlyContainer,
} from '../elements/containers';
import { SubText } from '../elements/text';

const Anchor = styled.a`
  & > svg {
    color: ${({ theme }) => theme.colors.grey};
    transition: ${({ theme }) => theme.transitions.ease};
    margin-right: 1rem;
  }

  &:hover > svg {
    color: ${({ theme }) => theme.colors.tertiery};
  }
`;

const Footer = () => (
  <footer>
    <BackgroundContainer color="primary">
      <ContentContainer>
        <FlexEvenlyContainer>
          <Image src={'/logo.svg'} alt={'Ethan Blumenthal'} width={50} height={50} />
          <SubText>&copy; {new Date().getFullYear()} Ethan Blumenthal</SubText>

          <FlexContainer>
            <Anchor href="https://www.linkedin.com/in/ethanblumenthal/" target="_blank">
              <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
            </Anchor>

            <Anchor href="https://medium.com/@ethanblumenthal" target="_blank">
              <FontAwesomeIcon icon={faMediumM} size="lg" />
            </Anchor>

            <Anchor href="https://github.com/ethanblumenthal" target="_blank">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </Anchor>
          </FlexContainer>
        </FlexEvenlyContainer>
      </ContentContainer>
    </BackgroundContainer>
  </footer>
);

export default Footer;
