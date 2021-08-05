import styled from 'styled-components';

export const Wrapper = styled.span`
  margin-right: 5px;

  ::selection, b::selection {
    color: var(--backgroundColor);
    background: var(--fontColor);
  }
`;

export const User = styled.b`
  display: none;
  color: var(--fontColorLighten);

  @media (min-width: 600px) {
    display: inline;
  }
`;