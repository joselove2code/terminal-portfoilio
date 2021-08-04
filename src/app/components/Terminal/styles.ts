import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--backgroundColor);
`;

export const Content = styled.div`
  margin: auto;
  color: var(--fontColor);
  font-family: var(--font);
  max-width: var(--maxWidth);
  padding-left: var(--marginX);
  padding-right: var(--marginX);
`;