import styled from 'styled-components';

export const Button = styled.button`
  height: 2.5rem;
  font-size: 1rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
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

export const SquareButton = styled(Button)`
  height: 3rem;
  border-radius: 0.25rem;
  padding: 0 1.5rem;
`;

export const ThinButton = styled.button`
  height: 1.5rem;
  font-size: 0.9rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.grey};
  background-color: ${({ theme }) => theme.colors.lightGrey};
  text-transform: uppercase;
  border-radius: 2rem;
  border: none;
  outline: none;
  padding: 0 0.9rem;
  transition: ${({ theme }) => theme.transitions.ease};
  margin-right: 0.5rem;

  &:hover {
    background-color: rgba(233, 236, 239, 0.5);
  }
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

export const ScrollButton = styled.button`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  font-size: 1.25rem;
  height: 2.5rem;
  width: 2.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  outline: none;
`;
