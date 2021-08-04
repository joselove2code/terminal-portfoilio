import styled from "styled-components";

export const Wrapper = styled.p`
  line-height: var(--lineHeight);

  ::selection {
    color: var(--backgroundColor);
    background: var(--green);
  }
`;