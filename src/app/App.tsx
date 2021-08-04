import { FunctionComponent } from 'react';
import Terminal from './components/Terminal';
import { GlobalStyle } from './GlobalStyle';

const App: FunctionComponent = () => {
  return (
    <>
      <GlobalStyle />
      <Terminal />
    </>
  );
}

export default App;
