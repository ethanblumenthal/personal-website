import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

import { PageHeader, Text } from '../elements/text';
import { Button } from '../elements/buttons';
import { BIO } from '../utils';

const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const Content = styled.div`
  max-width: 30rem;
  margin-left: 3rem;
`;

const Header = () => (
  <Container>
    <Image
      src={BIO.image}
      alt={BIO.title}
      width={400}
      height={400}
      style={{ borderRadius: '50%' }}
    />

    <Content>
      <PageHeader>{BIO.title}</PageHeader>
      <Text>{BIO.description}</Text>
      <Link href="/about">
        <Button>Learn more</Button>
      </Link>
    </Content>
  </Container>
);

export default Header;
