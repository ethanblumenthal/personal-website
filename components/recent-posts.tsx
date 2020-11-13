import Link from 'next/link';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

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
  padding: 4rem 4rem;
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
  background-color: #ffffff;
  box-shadow: 10px 10px 8px 10px #888888;
  border-radius: 0.25rem;
  border: 1px soldi black;
  height: 22.5rem;
  width: 20rem;
  padding: 1rem 2rem;
`;

interface IPost {
  date: string;
  title: string;
  description: string;
}

const RecentPosts = () => (
  <Container>
    <FlexContainer>
      <h2>Recent Posts</h2>
      <ArrowButton>
        View all <FontAwesomeIcon icon={faArrowRight} />
      </ArrowButton>
    </FlexContainer>

    <CardContainer>
      {POSTS &&
        POSTS.map(({ date, title, description }: IPost) => (
          <Card key={title}>
            <p>{date.toUpperCase()}</p>
            <h3>{title}</h3>
            <p>{description}</p>
          </Card>
        ))}
    </CardContainer>
  </Container>
);

export default RecentPosts;
