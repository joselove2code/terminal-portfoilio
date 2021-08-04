import React from 'react'
import { Wrapper, Content } from './styles';
import TerminalHeader from '../TerminalHeader';
import TerminalIntro from '../TerminalIntro';
import TerminalPrompt from '../TerminalPrompt';

const Terminal: React.FC = () => {
  return (
    <Wrapper>
      <Content>
        <TerminalHeader />
        <TerminalIntro />
        <TerminalPrompt />
      </Content>
    </Wrapper>
  );
};

export default Terminal;