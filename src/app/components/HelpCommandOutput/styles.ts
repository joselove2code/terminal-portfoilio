import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: var(--lineHeight);
`;

export const Intro = styled.div`
  line-height: var(--lineHeight);
`;

export const CommandWrapper = styled.div`
  display: flex;
  margin-top: var(--lineHeight);
`;

export const CommandLabel = styled.div`
  min-width: 10ch;
  line-height: var(--lineHeight);
  color: var(--highlightColor);
  
  @media (min-width: 600px) {
    min-width: 15ch;
  }
`;

export const CommandDescription = styled.div`
  line-height: var(--lineHeight);
`;