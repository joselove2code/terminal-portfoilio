import styled from "styled-components";

type Props = {
  bold?: boolean;
  block?: boolean;
};

export const Hightlight = styled.span<Props>`
  color: var(--highlightColor);
  font-weight: ${({ bold }) => bold ? 'bold' : 'normal' };
  display: ${({ block }) => block ? 'block' : 'inline' };

  ::selection {
    color: var(--backgroundColor);
    background: var(--highlightColor);
  }
`;