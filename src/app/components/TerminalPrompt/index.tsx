import React from 'react';
import { Hightlight } from '../Highlight';
import { Wrapper, User } from './styles';

const TerminalPrompt: React.FC = () => (
  <Wrapper>
    <User>root@portfolio:</User>
    <Hightlight>~$</Hightlight>
  </Wrapper>
);

export default TerminalPrompt;