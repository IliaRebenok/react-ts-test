import React {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [number, setNumber] = useState <number> (5);

  const changeNumber = () => {
    setNumber('10')
  }



  return (
    <div className="App">
      <h1
    </div>
  );
}

export default App;
