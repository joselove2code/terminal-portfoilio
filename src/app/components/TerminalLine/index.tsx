import React from 'react'
import TerminalPrompt from '../TerminalPrompt';
import { Wrapper, Char, Caret } from './styles';

type Props = {
  caret?: number;
  command: string[];
}

const TerminalLine: React.FC<Props> = ({ command, caret }) => {
  const htmlizeSpace = (char: string) => (
    char === ' ' ? <>&nbsp;</> : char
  );

  return (
    <Wrapper >
      <TerminalPrompt />

      {command.map((char, index) => (
        <Char key={index}>
          {htmlizeSpace(char)}
          {caret === index &&
            <Caret>
              {htmlizeSpace(char)}
            </Caret>
          }
        </Char>
      ))}

      <Char>
        {caret === command.length &&
          <Caret>&nbsp;</Caret>
        }
      </Char>
    </Wrapper>
  )
};

export default TerminalLine;