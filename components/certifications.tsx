import styled from 'styled-components';

import { SectionHeader, Text, SubText } from '../elements/text';
import { CERTIFICATIONS } from '../utils';

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 5rem 8rem;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Card = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  height: 10rem;
  width: 15rem;
  padding: 1rem 2rem;
  transition: ${({ theme }) => theme.transitions.ease};
  cursor: pointer;
  top: 0;
  text-align: center;

  &:hover {
    box-shadow: 0px 16px 30px rgba(0, 0, 0, 0.1);
    top: -0.5rem;
  }
`;

interface ICertifications {
  title: string;
  description: string;
}

const Certifications = () => (
  <Container>
    <SectionHeader>Certifications</SectionHeader>

    <CardContainer>
      {CERTIFICATIONS &&
        CERTIFICATIONS.map(({ title, description }: ICertifications) => (
          <Card>
            <SubText>{description}</SubText>
            <Text>{title}</Text>
          </Card>
        ))}
    </CardContainer>
  </Container>
);

export default Certifications;
