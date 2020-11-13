import styled from 'styled-components';

export const Button = styled.button`
  height: 2.5rem;
  font-size: 1rem;
  cursor: pointer;
  color: #ffffff;
  background-color: ${({ theme }) => theme.colors.button};
  border-radius: 2rem;
  border: none;
  outline: none;
  padding: 0 1rem;
  transition: ${({ theme }) => theme.transitions.ease};

  &:hover {
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  }
`;

export const OutlineButton = styled(Button)`
  color: ${({ theme }) => theme.colors.text};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.outline};
`;

export const ArrowButton = styled.button`
  font-size: 1.2rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.button};
  background-color: transparent;
  border: none;
  outline: none;

  & > svg {
    margin-left: 0.5rem;
    transition: ${({ theme }) => theme.transitions.ease};
  }

  &:hover > svg {
    margin-left: 1rem;
  }
`;
