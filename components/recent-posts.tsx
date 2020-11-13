import Link from 'next/link';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { SectionHeader, CardHeader, Text, SubText } from '../elements/text';
import { ArrowButton } from '../elements/buttons';

const POSTS = [
  {
    date: 'April 9, 2020',
    title: 'System-Based Theming with Styled Components',
    description:
      'Learn how to support system-based theming in Styled Components, while allowing a user to select their preferred theme and persist that choice.',
  },
  {
    date: 'November 5, 2018',
    title: 'Implicit State Sharing in React & Vue',
    description:
      'Learn to use React’s Context API and provide/inject in Vue to share state between related components without resorting to a global data store.',
  },
  {
    date: 'April 9, 2020',
    title: 'Component Reusability in React & Vue',
    description:
      'Learn how to support system-based theming in Styled Components, while allowing a user to select their preferred theme and persist that choice.',
  },
];

const Container = styled.div`
  background-color: #f5f5f5;
  padding: 5rem 8rem;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
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

interface IPost {
  date: string;
  title: string;
  description: string;
}

const RecentPosts = () => (
  <Container>
    <FlexContainer>
      <SectionHeader>Recent Articles</SectionHeader>
      <Link href="/blog">
        <ArrowButton>
          View all
          <FontAwesomeIcon icon={faArrowRight} />
        </ArrowButton>
      </Link>
    </FlexContainer>

    <CardContainer>
      {POSTS &&
        POSTS.map(({ date, title, description }: IPost) => (
          <Card key={title}>
            <SubText>{date}</SubText>
            <CardHeader>{title}</CardHeader>
            <Text>{description}</Text>
          </Card>
        ))}
    </CardContainer>
  </Container>
);

export default RecentPosts;
