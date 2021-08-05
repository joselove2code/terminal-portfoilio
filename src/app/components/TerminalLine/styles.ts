import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Char = styled.span`
  position: relative;
  line-height: var(--lineHeight);

  ::selection {
    color: var(--backgroundColor);
    background: var(--fontColor);
  }
`;

export const Caret = styled.span`
  left: 0;
  position: absolute;
  color: var(--backgroundColor);
  line-height: var(--lineHeight);
  background-color: var(--fontColor);
  animation: blink 1s steps(5, start) infinite;

  ::selection {
    background: var(--fontColor);
    color: var(--backgroundColor);
  }

  @keyframes blink {
    to {
      visibility: hidden;
    }
  }
`;