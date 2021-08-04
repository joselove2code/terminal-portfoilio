import React from 'react'
import { Hightlight } from '../Highlight';
import { Wrapper, Label, Char, Caret } from './styles';

type Props = {
  caret: number;
  chars: string[];
}

const TerminalPrompt: React.FC<Props> = ({ chars, caret }) => (
  <Wrapper>
    <Label>
      <b>root@portfolio:</b><Hightlight>~$</Hightlight>
    </Label>
    {chars.map((char, index) => (
      <Char key={index}>
        {char}
        {caret === index &&
          <Caret>{char}</Caret>
        }
      </Char>
    ))}
    <Char>
      {caret === chars.length &&
        <Caret>&nbsp;</Caret>
      }
    </Char>
  </Wrapper>
);;

export default TerminalPrompt;