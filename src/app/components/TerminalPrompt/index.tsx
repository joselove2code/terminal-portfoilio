import React from 'react';
import { Hightlight } from '../Highlight';
import { Wrapper } from './styles';

const TerminalPrompt: React.FC = () => (
  <Wrapper>
    <b>root@portfolio:</b>
    <Hightlight>~$</Hightlight>
  </Wrapper>
);

export default TerminalPrompt;