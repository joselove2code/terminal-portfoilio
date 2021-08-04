import React from 'react';
import { Wrapper, AsciiArt, Line } from './styles';

const PortfolioAsciiArt = [
  '__________              __    _____      .__  .__        ',
  '\\______   \\____________/  |__/ ____\\____ |  | |__| ____  ',
  ' |     ___/  _ \\_  __ \\   __\\   __\\/  _ \\|  | |  |/  _ \\ ',
  ' |    |  (  <_> )  | \\/|  |  |  | (  <_> )  |_|  (  <_> )',
  ' |____|   \\____/|__|   |__|  |__|  \\____/|____/__|\\____/ ',
];

const TerminalAsciiArt = [
  '  ___________                  .__              .__   ',
  '  \\__    ___/__________  _____ |__| ____ _____  |  |  ',
  '    |    |_/ __ \\_  __ \\/     \\|  |/    \\\\__  \\ |  |  ',
  '    |    |\\  ___/|  | \\/  Y Y  \\  |   |  \\/ __ \\|  |__',
  '    |____| \\___  >__|  |__|_|  /__|___|  (____  /____/',
  '               \\/            \\/        \\/     \\/      '
];

const TerminalHeader: React.FC = () => (
  <Wrapper>
    <AsciiArt>
      {PortfolioAsciiArt.map(line => (
        <Line key={line}>{line}</Line>
      ))}
    </AsciiArt>
    <AsciiArt>
      {TerminalAsciiArt.map(line => (
        <Line key={line}>{line}</Line>
      ))}
    </AsciiArt>
  </Wrapper>
);

export default TerminalHeader;