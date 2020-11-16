import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

import { HeaderContainer } from '../elements/containers';
import { PageHeader, Text } from '../elements/text';
import { Button } from '../elements/buttons';
import { BIO } from '../utils';

const StyledImage = styled(Image)`
  border-radius: 50%;
`;

const Content = styled.div`
  max-width: 30rem;
  margin-left: 3rem;
`;

const Header = () => (
  <HeaderContainer>
    <StyledImage src={BIO.image} alt={BIO.title} width={400} height={400} />

    <Content>
      <PageHeader>{BIO.title}</PageHeader>
      <Text>{BIO.description}</Text>
      <Link href="/about">
        <Button>Learn more</Button>
      </Link>
    </Content>
  </HeaderContainer>
);

export default Header;
