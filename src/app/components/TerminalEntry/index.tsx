import React from 'react';
import TerminalLine from '../TerminalLine';
import CommandOutput from '../CommandOutput';

type Props = {
  command: string[];
}

const TerminalEntry: React.FC<Props> = ({ command }) => {
  return (
    <>
      <TerminalLine command={command} />
      <CommandOutput command={command.join('')} />
    </>
  )
};

export default TerminalEntry;