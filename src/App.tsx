import React, { useState } from 'react';
import './App.css';
import TextInput from './Components/TextInput/TextInput';

function App() {

  // const [ ]

  return (
    <div className="App">
      <header>
        <h1>Morse Code Translator</h1>
      </header>
      <TextInput label={'Input'} readOnly={false} />
      <TextInput label={'Output'} readOnly={true} />
    </div>
  );
}

export default App;
