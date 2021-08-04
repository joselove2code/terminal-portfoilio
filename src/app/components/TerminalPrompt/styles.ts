import styled from 'styled-components';

export const Label = styled.span`
  margin-right: 5px;

  ::selection, b::selection {
    color: var(--backgroundColor);
    background: var(--green);
  }
`;

export const Input = styled.input`
  width: 0;
  border: 0;
  outline: none;
  background-color: transparent;
`;

export const Prompt = styled.span`
  overflow-wrap: break-word;

  ::selection {
    color: var(--backgroundColor);
    background: var(--green);
  }
`;

export const Caret = styled.span`
  border-left: 1ch solid var(--green);
  animation: blink 1s steps(5, start) infinite;

  @keyframes blink {
    to {
      visibility: hidden;
    }
  }
`;