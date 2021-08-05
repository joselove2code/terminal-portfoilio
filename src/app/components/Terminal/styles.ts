import styled from 'styled-components';

export const Wrapper = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  position: absolute;  
  padding-top: var(--verticalMargin);  
  padding-bottom: var(--verticalMargin);  
  background-color: var(--backgroundColor);

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background-color: gray;
  }
`;

export const Content = styled.div`
  margin: auto;
  color: var(--fontColor);
  font-family: var(--font);
  max-width: var(--maxWidth);
  padding-left: var(--marginX);
  padding-right: var(--marginX);
`;