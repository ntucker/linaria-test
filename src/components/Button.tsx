import { styled } from '@linaria/react';

export default styled.a`
  color: #ddd;
  cursor: pointer;
  font-weight: 900;
  background-color: var(--color-primary);
  padding: 1ex 1.5em;
  border-radius: 4px;

  &:hover {
    background-color: var(--color-primary-hover);
  }
`;
