import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.card};
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  width: 23rem;
  padding: 1rem 2rem;
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

export const ImageCard = styled(Card)`
  height: 20rem;
`;

export const BaseCard = styled(Card)`
  height: 16rem;
`;

export const SmallCard = styled(Card)`
  height: 10rem;
  width: 16rem;
  text-align: center;
`;
