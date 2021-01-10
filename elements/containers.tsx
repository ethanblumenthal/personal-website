import styled from 'styled-components';
import { devices } from '../utils';

export const BlogContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  max-width: 46rem;
  padding: 4rem 0;
  margin: 0 auto;

  @media ${devices.desktop} {
    padding: 4rem 1rem;
  }
`;

export const BackgroundContainer = styled.div`
  background-color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.background};
  padding: ${({ short }) => (short ? '1rem 2rem' : '2rem')};

  @media ${devices.tablet} {
    padding: ${({ short }) => (short ? '1rem 3rem' : '3rem')};
  }

  @media ${devices.desktop} {
    padding: ${({ short }) => (short ? '1rem 4rem' : '4rem')};
  }
`;

export const ContentContainer = styled.div`
  max-width: 74rem;
  margin: 0 auto;
`;

export const HeaderContent = styled.div`
  margin: 2rem 0 0 0;

  @media ${devices.tablet} {
    max-width: 30rem;
    margin: 0;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const FlexCenterContainer = styled(FlexContainer)`
  justify-content: center;

  @media ${devices.tablet} {
    flex-wrap: nowrap;
  }
`;

export const FlexEvenlyContainer = styled(FlexContainer)`
  justify-content: space-evenly;

  @media ${devices.tablet} {
    flex-wrap: nowrap;
  }
`;

export const SkillContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.tertiery};
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  height: 5.75rem;
  padding: 1.75rem;
`;

export const CenterContainer = styled.div`
  text-align: center;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 2rem;
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
