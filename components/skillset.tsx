import Link from 'next/link';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { ArrowButton } from '../elements/buttons';
import { SectionHeader } from '../elements/text';
import { FlexContainer } from '../elements/containers';
import { SKILLSET } from '../utils';

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 5rem 8rem;
`;

const SkillContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Skill = styled.div`
  width: 17rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  margin: 1rem 0;
`;

const Text = styled.p`
  color: #ffffff;
  font-size: 1.75rem;
  padding-left: 1.5rem;
`;

const Skillset = () => (
  <Container>
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
          <Skill>
            <Text>{skill}</Text>
          </Skill>
        ))}
    </SkillContainer>
  </Container>
);

export default Skillset;
