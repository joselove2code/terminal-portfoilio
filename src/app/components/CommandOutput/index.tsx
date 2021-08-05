import React from 'react';
import { Command } from '../../types/Command';
import HelpCommandOutput from '../HelpCommandOutput';

type Props = { command: string };

const CommandOutput: React.FC<Props> = (props) => {
  const command = props.command.trim();

  switch (command) {
    case '':
      return null;
    case Command.Help:
      return <HelpCommandOutput />;
    default: 
      return <div> {command}: Command not found </div>;
  }
};

export default CommandOutput;