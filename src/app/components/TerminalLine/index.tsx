import React from 'react'
import TerminalPrompt from '../TerminalPrompt';
import { Wrapper, Char, Caret } from './styles';

type Props = {
  caret: number;
  chars: string[];
}

const TerminalLine: React.FC<Props> = ({ chars, caret }) => {
  const htmlizeSpace = (char: string) => (
    char === ' ' ? <>&nbsp;</> : char
  );

  return (
    <Wrapper >
      <TerminalPrompt />

      {chars.map((char, index) => (
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
        {caret === chars.length &&
          <Caret>&nbsp;</Caret>
        }
      </Char>
    </Wrapper>
  )
};

export default TerminalLine;