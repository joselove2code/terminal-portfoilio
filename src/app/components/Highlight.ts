import styled from "styled-components";

type Props = {
  bold?: boolean;
};

export const Hightlight = styled.span<Props>`
  color: var(--cyan);
  font-weight: ${({ bold }) => bold ? 'bold' : 'normal' };

  ::selection {
    color: var(--backgroundColor);
    background: var(--cyan);
  }
`;