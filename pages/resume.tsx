import Head from 'next/head';
import styled from 'styled-components';

import Layout from '../components/layout';
import { Button } from '../elements/buttons';
import { BackgroundContainer, FlexContainer } from '../elements/containers';
import { PageHeader, SectionHeader, CardHeader, SubText, Text } from '../elements/text';
import { EXPERIENCE, EDUCATION, SKILLSET } from '../utils';

const MainContent = styled.div`
  max-width: 40rem;
`;

const SideContent = styled.div`
  max-width: 24rem;
`;

const UnorderedList = styled.ul`
  padding-left: 0;
`;

const Resume = () => (
  <Layout>
    <Head>
      <title>Resume</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <BackgroundContainer>
      <PageHeader>Ethan Blumenthal</PageHeader>
      <Text>Software Engineer</Text>

      <FlexContainer>
        <MainContent>
          {EXPERIENCE &&
            EXPERIENCE.map(({ company, position, dates, accomplishments }) => (
              <div>
                <SubText>{company}</SubText>
                <SectionHeader>{position}</SectionHeader>
                <UnorderedList>
                  {accomplishments &&
                    accomplishments.map((accomplishment) => (
                      <li>
                        <Text>{accomplishment}</Text>
                      </li>
                    ))}
                </UnorderedList>
                <Text>{dates}</Text>
                <hr />
              </div>
            ))}
        </MainContent>

        <SideContent>
          <CardHeader>Education</CardHeader>
          {EDUCATION.map(({ title, description, date }) => (
            <div key={title}>
              <Text>{title}</Text>
              <Text>{description}</Text>
              <Text>{date}</Text>
            </div>
          ))}

          <CardHeader>Skillset</CardHeader>
          <Text>{SKILLSET.join(', ')}</Text>
          <CardHeader>Certifications</CardHeader>
          <a href="mailto:ethan.blumenthal@gmail.com" target="_blank">
            <Button>Contact me</Button>
          </a>
        </SideContent>
      </FlexContainer>
    </BackgroundContainer>
  </Layout>
);

export default Resume;
