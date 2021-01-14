import Link from 'next/link';
import { ArrowRight } from 'react-feather';

import { ArrowButtonRight } from '../elements/buttons';
import { ColorSectionHeader, ColorCardHeader, SubText } from '../elements/text';
import {
  BackgroundContainer,
  ContentContainer,
  HeaderContainer,
  LgGridContainer,
  SkillContainer,
} from '../elements/containers';

const RecentReviews = ({ allReviews }) => (
  <BackgroundContainer color="primary">
    <ContentContainer>
      <HeaderContainer>
        <ColorSectionHeader>Recent Reviews</ColorSectionHeader>

        <Link href="/reviews">
          <ArrowButtonRight>
            View all
            <ArrowRight />
          </ArrowButtonRight>
        </Link>
      </HeaderContainer>

      <LgGridContainer>
        {allReviews.map(({ date, title }) => (
          <SkillContainer key={title}>
            <SubText>{date}</SubText>
            <ColorCardHeader>{title}</ColorCardHeader>
          </SkillContainer>
        ))}
      </LgGridContainer>
    </ContentContainer>
  </BackgroundContainer>
);

export default RecentReviews;
