import React, { useRef } from 'react';
import { Button, Input, Wrapper } from './styles';

const MobileKeyboard: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const showKeyboard = () => {
    inputRef.current?.focus();
  };

  return (
    <Wrapper>
      <Input ref={inputRef} />
      <Button onClick={showKeyboard}>⌨️</Button>
    </Wrapper>
  );
};

export default MobileKeyboard;