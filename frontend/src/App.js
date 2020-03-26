import React from 'react';

import './global.css';

import Routes from './routes';

// JSX (JavaScript XML)
//useState no import do lado do react
//function App() {
  //const [counter, setCounter] = useState(0);

  // Array [valor, funcaodeAtualização]

  //function increment() {
    //setCounter(counter + 1);
  //}
  /**
   *    <div>
    <Header>Contador: {counter}</Header>
    <button onClick={increment}>Incrementar</button>
    </div>
    dentro de return
   */
function App(){
  return (
 <Routes />
  );
}

export default App;
