import Link from 'next/link';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { ArrowButton } from '../elements/buttons';
import { ColorContainer, FlexContainer } from '../elements/containers';
import { SKILLSET } from '../utils';

const SkillContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Skill = styled.div`
  width: 17rem;
  background-color: ${({ theme }) => theme.colors.tertiery};
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  margin: 1rem 0;
`;

export const SectionHeader = styled.h2`
  font-size: 2.25rem;
  color: ${({ theme }) => theme.colors.white};
  margin-top: 0;
`;

const Text = styled.p`
  font-size: 1.75rem;
  color: ${({ theme }) => theme.colors.white};
  padding-left: 1.5rem;
`;

const Skillset = () => (
  <ColorContainer>
    <FlexContainer>
      <SectionHeader>Skillset</SectionHeader>

      <Link href="/resume">
        <ArrowButton>
          View resume
          <FontAwesomeIcon icon={faArrowRight} />
        </ArrowButton>
      </Link>
    </FlexContainer>

    <SkillContainer>
      {SKILLSET &&
        SKILLSET.map((skill) => (
          <Skill key={skill}>
            <Text>{skill}</Text>
          </Skill>
        ))}
    </SkillContainer>
  </ColorContainer>
);

export default Skillset;
