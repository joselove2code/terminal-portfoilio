import React, { useEffect, useRef, useState } from 'react'
import { Key } from '../../types/Key';
import { Command } from '../../types/Command';
import TerminalHeader from '../TerminalHeader';
import TerminalIntro from '../TerminalIntro';
import TerminalLine from '../TerminalLine';
import TerminalEntry from '../TerminalEntry';
import { Wrapper, Content } from './styles';

type State = {
  caret: number;
  command: string[];
}

type Entry = {
  command: string[];
};

const Terminal: React.FC = () => {
  const terminalRef = useRef<HTMLDivElement>(null);
  const [entries, setEntries] = useState<Entry[]>([]);
  const [state, setState] = useState<State>({
    caret: 0,
    command: [],
  });

  const scrollToBottom = () => {
    if (terminalRef.current)
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
  };

  useEffect(() => {
    const decCaret = () => {
      setState({
        ...state,
        caret: Math.max(0, state.caret - 1)
      });
    };

    const incCaret = (limit = state.command.length) => {
      setState({
        ...state,
        caret: Math.min(limit, state.caret + 1)
      });
    };

    const moveCaretToStart = () => {
      setState({
        ...state,
        caret: 0,
      });
    }

    const moveCaretToEnd = () => {
      setState({
        ...state,
        caret: state.command.length,
      });
    }

    const writeChar = (char: string) => {
      const prefix = state.command.filter((_, index) => index < state.caret);
      const suffix = state.command.filter((_, index) => index >= state.caret);

      setState({
        caret: state.caret + 1,
        command: [...prefix, char, ...suffix],
      });
    }

    const deleteChar = () => {
      setState({
        ...state,
        command: state.command.filter((_, index) => index !== state.caret),
      });
    };

    const deletePrevChar = () => {
      setState({
        caret: Math.max(0, state.caret - 1),
        command: state.command.filter((_, index) => index !== (state.caret - 1)),
      });
    };

    const execCommand = () => {
      const command = state.command.join('').trim();
      
      if (command === Command.Clear) {
        setEntries([]);
      } else {
        setEntries([...entries, { command: state.command }])
      }

      setState({
        command: [],
        caret: 0,
      });
    };

    const handleKeyDown = ({ key }: KeyboardEvent) => {
      if (key === Key.BackSpace)
        deletePrevChar()
      else if (key === Key.ArrowLeft)
        decCaret();
      else if (key === Key.ArrowRight)
        incCaret();
      else if (key === Key.Home)
        moveCaretToStart();
      else if (key === Key.End)
        moveCaretToEnd();
      
      scrollToBottom();
    };
    
    const handleKeyPress = ({ key }: KeyboardEvent) => {
      if (key === Key.Delete)
        deleteChar();
      else if (key === Key.Enter)
        execCommand();
      else
        writeChar(key);
      
      scrollToBottom();
    };
    
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keypress', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keypress', handleKeyPress);
    };
  }, [state, entries]);

  return (
    <Wrapper ref={terminalRef}>
      <Content>
        <TerminalHeader />
        <TerminalIntro />
        {entries.map((entry, index) => (
          <TerminalEntry key={index} command={entry.command} />
        ))}
        <TerminalLine command={state.command} caret={state.caret} />
      </Content>
    </Wrapper>
  );
};

export default Terminal;