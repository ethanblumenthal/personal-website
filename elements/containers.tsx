import styled from 'styled-components';

export const BackgroundContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 4rem 8rem;
`;

export const OffsetContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.offset};
  padding: 4rem 8rem;
`;

export const ColorContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 4rem 8rem;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
