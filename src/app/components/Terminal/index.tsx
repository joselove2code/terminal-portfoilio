import React, { useEffect, useState } from 'react'
import { Wrapper, Content } from './styles';
import TerminalHeader from '../TerminalHeader';
import TerminalIntro from '../TerminalIntro';
import TerminalPrompt from '../TerminalPrompt';

enum Keys {
  End = 'End',
  Home = 'Home',
  Delete = 'Delete',
  BackSpace = 'Backspace',
  ArrowLeft = 'ArrowLeft',
  ArrowRight = 'ArrowRight',
}

type State = {
  caret: number;
  chars: string[];
}

const Terminal: React.FC = () => {
  const [state, setState] = useState<State>({
    caret: 0,
    chars: [],
  });

  useEffect(() => {
    const decCaret = () => {
      setState({
        ...state,
        caret: Math.max(0, state.caret - 1)
      });
    };

    const incCaret = (limit = state.chars.length) => {
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
        caret: state.chars.length,
      });
    }

    const writeChar = (char: string) => {
      const prefix = state.chars.filter((_, index) => index < state.caret);
      const suffix = state.chars.filter((_, index) => index >= state.caret);

      setState({
        caret: state.caret + 1,
        chars: [...prefix, char, ...suffix],
      });
    }

    const deleteChar = () => {
      setState({
        ...state,
        chars: state.chars.filter((_, index) => index !== state.caret),
      });
    };

    const deletePrevChar = () => {
      setState({
        caret: Math.max(0, state.caret - 1),
        chars: state.chars.filter((_, index) => index !== (state.caret - 1)),
      });
    };

    const handleKeyDown = ({ key }: KeyboardEvent) => {
      if (key === Keys.BackSpace)
        deletePrevChar()
      else if (key === Keys.ArrowLeft)
        decCaret();
      else if (key === Keys.ArrowRight)
        incCaret();
      else if (key === Keys.Home)
        moveCaretToStart();
      else if (key === Keys.End)
        moveCaretToEnd();
    };
    
    const handleKeyPress = ({ key }: KeyboardEvent) => {
      if (key === Keys.Delete)
        deleteChar();
      else
        writeChar(key);
    };
    
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keypress', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keypress', handleKeyPress);
    };
  }, [state]);

  return (
    <Wrapper>
      <Content>
        <TerminalHeader />
        <TerminalIntro />
        <TerminalPrompt chars={state.chars} caret={state.caret} />
      </Content>
    </Wrapper>
  );
};

export default Terminal;