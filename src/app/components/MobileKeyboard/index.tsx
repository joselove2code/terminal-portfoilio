import React, { useRef } from 'react';
import { Button, Input, Wrapper } from './styles';

type Props = {
  onShowKeyboard: () => void,
};

const MobileKeyboard: React.FC<Props> = ({ onShowKeyboard }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const showKeyboard = () => {
    inputRef.current?.focus();
    setTimeout(onShowKeyboard, 500);
  };

  return (
    <Wrapper>
      <Input ref={inputRef} />
      <Button onClick={showKeyboard}>⌨️</Button>
    </Wrapper>
  );
};

export default MobileKeyboard;