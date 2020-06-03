import React, { useState } from 'react';
import './App.css';

import Header from './Header';

function App() {
  //Como usar ESTADO
  const [counter, setCounter] = useState(0); //[valor do estado, função para atualizar valor do estado]

  //função para cuidar do click no butão
  function handleButtonClick(){
    //Mudando valor do state
    setCounter(counter + 1);
  }

  return (
        <div>
          <Header title="Hello World"/>

          <h1>{counter}</h1>
          <button type="button" onClick={handleButtonClick}>Aumentar</button>
        </div>
  );
}

export default App;
