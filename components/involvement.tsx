import styled from 'styled-components';

import { INVOLVEMENT } from '../utils';

const Container = styled.div`
  background-color: #f5f5f5;
  padding: 5rem 8rem;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Card = styled.div`
  position: relative;
  background-color: #ffffff;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  height: 20rem;
  width: 23rem;
  padding: 1rem 2rem;
  transition: ${({ theme }) => theme.transitions.ease};
  cursor: pointer;
  top: 0;

  &:hover {
    box-shadow: 0px 16px 30px rgba(0, 0, 0, 0.1);
    top: -0.5rem;
  }
`;

const Heading = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 0;
`;

const Text = styled.p`
  line-height: 1.5rem;
  font-size: 1.1rem;
`;

interface IInvolvement {
  title: string;
  description: string;
  link: string;
}

const Involvement = () => (
  <Container>
    <h2>Involvement</h2>

    <CardContainer>
      {INVOLVEMENT &&
        INVOLVEMENT.map(({ title, description, link }: IInvolvement) => (
          <a href={link} target="_blank" key={title}>
            <Card>
              <Heading>{title}</Heading>
              <Text>{description}</Text>
            </Card>
          </a>
        ))}
    </CardContainer>
  </Container>
);

export default Involvement;
