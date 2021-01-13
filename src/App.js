import React from 'react';
import { Main } from './pages/Main';
import { CSSTransition } from 'react-transition-group';

function App() {
  return (
    <div className="App">
      <CSSTransition
        appear
        in
        classNames='backgroundTransition'
        timeout={1000}>

        <Main />

      </CSSTransition>
    </div>
  );
}

export default App;
