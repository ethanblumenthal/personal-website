import styled from 'styled-components';
import { devices } from '../utils';

export const Card = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.card};
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  padding: 2rem;
  transition: ${({ theme }) => theme.transitions.ease};
  cursor: pointer;
  top: 0;

  &:hover {
    box-shadow: 0px 16px 30px rgba(0, 0, 0, 0.1);
    top: -0.5rem;
  }
`;

export const BlogCard = styled(Card)`
  height: 20rem;
`;

export const SkillCard = styled(Card)`
  cursor: auto;
  padding: 0;

  &:hover {
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    top: 0;
  }
`;

export const ImageCard = styled(Card)`
  padding: 0;
  max-width: 400px;

  @media ${devices.tablet} {
    min-height: 35rem;
  }
`;

export const BaseCard = styled(Card)`
  @media ${devices.tablet} {
    min-height: 28em;
  }

  @media ${devices.desktop} {
    min-height: 20rem;
  }
`;

export const SmallCard = styled(Card)`
  height: 10rem;
  text-align: center;
`;

export const TagCard = styled(Card)`
  height: 7.5rem;
`;

export const CardContent = styled.div`
  padding: 2rem;
`;
