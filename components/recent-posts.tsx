import Link from 'next/link';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { SectionHeader, CardHeader, Text, SubText } from '../elements/text';
import { OffsetContainer, FlexContainer } from '../elements/containers';
import { ArrowButton } from '../elements/buttons';
import { IPost } from '../utils';

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

const RecentPosts = ({ posts }) => (
  <OffsetContainer>
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
      {posts &&
        posts.slice(0, 3).map(({ fields }: IPost) => (
          <Card key={fields.title}>
            <SubText>{fields.date}</SubText>
            <CardHeader>{fields.title}</CardHeader>
            <Text>{fields.description}</Text>
          </Card>
        ))}
    </CardContainer>
  </OffsetContainer>
);

export default RecentPosts;
