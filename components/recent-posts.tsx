import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';

import { SectionHeader, CardHeader, Text, SubText } from '../elements/text';
import {
  BackgroundContainer,
  ContentContainer,
  HeaderContainer,
  GridContainer,
} from '../elements/containers';
import { ArrowButtonRight } from '../elements/buttons';
import { Card } from '../elements/cards';
import { IPost } from '../utils';

const RecentPosts = ({ allPosts }) => (
  <BackgroundContainer>
    <ContentContainer>
      <HeaderContainer>
        <SectionHeader>Recent Posts</SectionHeader>
        <Link href="/blog">
          <ArrowButtonRight>
            View all
            <FontAwesomeIcon icon={faArrowRight} />
          </ArrowButtonRight>
        </Link>
      </HeaderContainer>

      <GridContainer>
        {allPosts?.slice(0, 3).map(({ title, date, excerpt }: IPost) => (
          <Card key={title}>
            <SubText>{moment(date).format('MMMM D, YYYY')}</SubText>
            <CardHeader style={{ margin: '1rem 0' }}>{title}</CardHeader>
            <Text>{excerpt}</Text>
          </Card>
        ))}
      </GridContainer>
    </ContentContainer>
  </BackgroundContainer>
);
export default RecentPosts;
