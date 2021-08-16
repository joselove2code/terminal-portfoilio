import React, { useRef, useState } from 'react';
import { Button, Input, Wrapper } from './styles';

type Props = {
  onShowKeyboard: () => void,
};

const MobileKeyboard: React.FC<Props> = ({ onShowKeyboard }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [showButton, setShowButton] = useState(true);

  const showKeyboard = () => {
    inputRef.current?.focus();
    setTimeout(onShowKeyboard, 500);
  };

  const toggleShowButton = () => {
    setShowButton(!showButton);
  };

  return (
    <Wrapper>
      <Input ref={inputRef} onBlur={toggleShowButton} onFocus={toggleShowButton} />
      {showButton &&
        <Button onClick={showKeyboard}>⌨️</Button>}
    </Wrapper>
  );
};

export default MobileKeyboard;