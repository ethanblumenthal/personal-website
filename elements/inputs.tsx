import styled from 'styled-components';

export const SearchInput = styled.input`
  font-size: 1.2rem;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border: none;
  outline: none;
  width: 100%;
  padding: 1rem 0;
  text-align: center;
  border-radius: 0.5rem;
`;

export const SubscribeInput = styled.input`
  width: 20rem;
  border: none;
  font-size: 1.1rem;
  border-radius: 0.25rem;
  background-color: ${({ theme }) => theme.colors.white};
  outline-color: ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.text};
  padding: 1rem 1rem;
  margin-right: 1rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors.lightBlue};
  }
`;
