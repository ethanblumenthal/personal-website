import Link from 'next/link';
import styled from 'styled-components';

import { Button } from '../elements/buttons';

const Container = styled.div`
  height: 70vh;
  max-width: 30rem;
  position: relative;
  top: 10rem;
  padding: 0 4rem;
`;

const Header = styled.h1``;

const Text = styled.p``;

const Hero = () => (
  <Container>
    <Header>Software Developer & Product Manager</Header>
    <Text>
      I’m a designer and developer committed to making the web a more empowering and accessible
      place. I create engaging user experiences and bring them to life through maintainable,
      high-quality code. I share what I’ve learned in my technical blog.
    </Text>
    <Link href="/about">
      <Button>Learn More</Button>
    </Link>
  </Container>
);

export default Hero;
