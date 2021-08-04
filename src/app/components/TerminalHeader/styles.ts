import styled from 'styled-components';

export const Wrapper = styled.header`
  white-space: pre;
  display: flex;
  flex-wrap: wrap;
  margin-top: var(--marginTop);
  font-size: 8px;

  @media (min-width: 600px) {
    font-size: 14px;
  }
`;

export const AsciiArt = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 600px) {
    width: fit-content;
  }
`;

export const Line = styled.div`
  width: fit-content;

  ::selection {
    color: var(--backgroundColor);
    background: var(--fontColor);
  }
`;