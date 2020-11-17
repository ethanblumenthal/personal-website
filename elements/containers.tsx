import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

export const BackgroundContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 4rem 8rem;
`;

export const OffsetContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.offset};
  padding: 4rem 8rem;
`;

export const BlogContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  max-width: 46rem;
  padding: 4rem 0;
  margin: 0 auto;
`;

export const ColorContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 4rem 8rem;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
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
