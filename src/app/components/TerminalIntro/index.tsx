import React from 'react';
import { Wrapper } from './styles';
import { Hightlight } from '../Highlight';

const TerminalIntro: React.FC = () => (
  <Wrapper>
    Hello, my name is <Hightlight bold>José Ignacio Cruz Moreira</Hightlight>.<br />
    I am a Full-Stack Software Engineer from Cuba.<br />
    If you want to know more about me, feel free to type some commands.<br />
    <Hightlight>Hint</Hightlight>: you can start by typing <Hightlight>help</Hightlight> to see the list of all available commands.
  </Wrapper>
);

export default TerminalIntro;