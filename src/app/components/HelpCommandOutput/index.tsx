import React from 'react'
import { Command, CommandDoc } from '../../types/Command';
import { Hightlight } from '../Highlight';
import { Wrapper, CommandDescription, CommandLabel, CommandWrapper, Intro } from './styles';

const HelpCommandOutput: React.FC = () => {
  const commands: CommandDoc[] = [
    {
      command: Command.Clear,
      description: 'Clears the command line output.'
    },
    {
      command: Command.Contact,
      description: 'Allows to get in touch with me.'
    },
    {
      command: Command.Exp,
      description: 'Displays a list of my work experiences.'
    },
    {
      command: Command.Help,
      description: 'Displays a list of all the available commands.'
    },
    {
      command: Command.Skills,
      description: 'Displays a list of the technical skills I have.'
    },
  ];

  return (
    <Wrapper>
      <Intro>
        Portfolio Terminal version 1.0.0 (x86_64 architecture) <br/>
        These interpreter commands are defined internally.
        Type <Hightlight>help</Hightlight> to see this list.
      </Intro>
      {commands.map(({ command, description }) => (
        <CommandWrapper key={command}>
          <CommandLabel>
            {command}
          </CommandLabel>
          <CommandDescription>
            {description}
          </CommandDescription>
        </CommandWrapper>
      ))}
    </Wrapper>
  )
};

export default HelpCommandOutput;
