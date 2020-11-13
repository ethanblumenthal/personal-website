import styled from 'styled-components';

export const Button = styled.button`
  height: 2.5rem;
  font-size: 1.2rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  background-color: transparent;
  border: 1px solid grey;
  border-radius: 2rem;
  outline: none;
  padding: 0 1rem;
`;

export const ArrowButton = styled.button`
  font-size: 1.2rem;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;

  & > svg {
    margin-left: 0.25rem;
  }
`;
