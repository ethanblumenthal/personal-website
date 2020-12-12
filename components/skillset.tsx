import Link from 'next/link';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { ArrowButtonRight } from '../elements/buttons';
import { ColorSectionHeader, ColorCardHeader } from '../elements/text';
import {
  BackgroundContainer,
  ContentContainer,
  HeaderContainer,
  LgGridContainer,
} from '../elements/containers';
import { SKILLSET } from '../utils';

const Skill = styled.div`
  background-color: ${({ theme }) => theme.colors.tertiery};
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  height: 5.75rem;
  padding: 1.75rem;
`;

const Skillset = () => (
  <BackgroundContainer color="primary">
    <ContentContainer>
      <HeaderContainer>
        <ColorSectionHeader>Skillset</ColorSectionHeader>

        <Link href="/resume">
          <ArrowButtonRight>
            View resume
            <FontAwesomeIcon icon={faArrowRight} />
          </ArrowButtonRight>
        </Link>
      </HeaderContainer>

      <LgGridContainer>
        {SKILLSET &&
          SKILLSET.map((skill) => (
            <Skill key={skill}>
              <ColorCardHeader>{skill}</ColorCardHeader>
            </Skill>
          ))}
      </LgGridContainer>
    </ContentContainer>
  </BackgroundContainer>
);

export default Skillset;
