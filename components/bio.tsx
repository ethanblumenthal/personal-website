import {
  BackgroundContainer,
  ContentContainer,
  DesktopWrapper,
  FlexEvenlyContainer,
  MainContent,
  MobileWrapper,
} from '../elements/containers';
import { PageHeader, Text } from '../elements/text';
import { Button } from '../elements/buttons';
import { RoundImage } from '../elements/images';
import { BIO } from '../utils';

const Bio = () => (
  <BackgroundContainer>
    <ContentContainer>
      <FlexEvenlyContainer>
        <RoundImage src={BIO.image} alt={BIO.title} width={400} height={400} />

        <MainContent isOnRight>
          <PageHeader>{BIO.title}</PageHeader>
          <Text style={{ margin: '1rem 0' }}>{BIO.description}</Text>
          <a
            href="https://ethanblumenthal.s3.us-east-2.amazonaws.com/ethan_blumenthal_resume.pdf"
            target="_blank"
          >
            <Button>View resume</Button>
          </a>
        </MainContent>
      </FlexEvenlyContainer>
    </ContentContainer>
  </BackgroundContainer>
);

export default Bio;
