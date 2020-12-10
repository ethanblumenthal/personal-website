import styled from 'styled-components';
import { devices } from '../utils';

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80vh;

  @media ${devices.tablet} {
    flex-direction: row;
    justify-content: center;
  }
`;

export const BlogContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  max-width: 46rem;
  padding: 4rem 0;
  margin: 0 auto;

  @media ${devices.laptop} {
    padding: 4rem 1rem;
  }
`;

export const BackgroundContainer = styled.div`
  background-color: ${({ theme, color }) => theme.colors[color]};
  padding: 2rem;

  @media ${devices.tablet} {
    padding: 3rem;
  }

  @media ${devices.laptop} {
    padding: 4rem;
  }
`;

export const ContentContainer = styled.div`
  max-width: 74rem;
  margin: 0 auto;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export const LgGridContainer = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;
