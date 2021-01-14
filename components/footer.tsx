import Image from 'next/image';
import styled from 'styled-components';
import { Phone, Mail, Linkedin, GitHub, MapPin, MessageCircle } from 'react-feather';

import {
  BackgroundContainer,
  FlexContainer,
  ContentContainer,
  StackContainer,
} from '../elements/containers';
import { CardHeader, SubText, Text } from '../elements/text';

const Anchor = styled.a`
  display: flex;

  & > * {
    color: ${({ theme }) => theme.colors.grey};
    transition: ${({ theme }) => theme.transitions.ease};
    margin: 0 1rem 1rem 0;
  }

  &:hover > * {
    color: ${({ theme }) => theme.colors.tertiery};
  }
`;

const Footer = () => (
  <footer>
    <BackgroundContainer color="footer">
      <ContentContainer>
        <FlexContainer>
          <StackContainer>
            <CardHeader style={{ marginBottom: '0.5rem' }}>Contact</CardHeader>

            <Anchor href="mailto:ethan.blumenthal@gmail.com" target="_blank">
              <Mail />
              <Text>ethan.blumenthal@gmail.com</Text>
            </Anchor>

            <Anchor href="tel:847-373-3778" target="_blank">
              <Phone />
              <Text>847-373-3778</Text>
            </Anchor>

            <Anchor href="https://www.google.com/maps?q=Chicago" target="_blank">
              <MapPin />
              <Text>Chicago, IL</Text>
            </Anchor>
          </StackContainer>

          <StackContainer>
            <CardHeader style={{ marginBottom: '0.5rem' }}>Follow Me</CardHeader>

            <Anchor href="https://www.linkedin.com/in/ethanblumenthal/" target="_blank">
              <Linkedin />
              <Text>LinkedIn</Text>
            </Anchor>

            <Anchor href="https://medium.com/@ethanblumenthal" target="_blank">
              <MessageCircle />
              <Text>Medium</Text>
            </Anchor>

            <Anchor href="https://github.com/ethanblumenthal" target="_blank">
              <GitHub />
              <Text>GitHub</Text>
            </Anchor>
          </StackContainer>

          <StackContainer>
            <Image src={'/logo.svg'} alt={'Ethan Blumenthal'} width={50} height={50} />
            <SubText style={{ marginTop: '1rem' }}>
              &copy; {new Date().getFullYear()} Ethan Blumenthal
            </SubText>
          </StackContainer>
        </FlexContainer>
      </ContentContainer>
    </BackgroundContainer>
  </footer>
);

export default Footer;
