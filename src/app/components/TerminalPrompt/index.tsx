import React, { ChangeEvent, useState } from 'react'
import { Hightlight } from '../Highlight';
import { Caret, Label, Input, Prompt } from './styles';

const TerminalPrompt: React.FC = () => {
  let promptRef: HTMLInputElement | null = null;
  const [text, setText] = useState<string>('');

  const setRef = (element: HTMLInputElement) => {
    promptRef = element;
    focusPrompt()
  }

  const focusPrompt = () => {
    // promptRef?.focus();
    console.log('focusPrompt', promptRef);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value);
    console.log('changed', event.currentTarget.value);
  };

  return (
    <div>
      <Label>
        <b>root@portfolio:</b><Hightlight>~$</Hightlight>
      </Label>
      <Input
        ref={setRef}
        onBlur={focusPrompt}
        onLoad={focusPrompt}
        onChange={handleChange}
      />
      <Prompt>{text}</Prompt>
      <Caret></Caret>
    </div>
  );
};

export default TerminalPrompt;