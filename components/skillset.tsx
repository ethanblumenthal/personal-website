import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { ArrowButtonRight } from '../elements/buttons';
import { SectionHeader, CardHeader, Text } from '../elements/text';
import {
  BackgroundContainer,
  ContentContainer,
  HeaderContainer,
  LgGridContainer,
} from '../elements/containers';
import { SKILLSET } from '../utils';
import { Card, CardContent } from '../elements/cards';

const Skillset = () => (
  <BackgroundContainer color="white">
    <ContentContainer>
      <HeaderContainer>
        <SectionHeader>Skillset</SectionHeader>

        <a href="/" target="_blank">
          <ArrowButtonRight>
            View resume
            <FontAwesomeIcon icon={faArrowRight} />
          </ArrowButtonRight>
        </a>
      </HeaderContainer>

      <LgGridContainer>
        {SKILLSET.map(({ title, skills }) => (
          <Card key={title}>
            <CardContent style={{ textAlign: 'center' }}>
              <CardHeader>{title}</CardHeader>
              {skills.map((skill) => (
                <Text key={skill}>{skill}</Text>
              ))}
            </CardContent>
          </Card>
        ))}
      </LgGridContainer>
    </ContentContainer>
  </BackgroundContainer>
);

export default Skillset;
