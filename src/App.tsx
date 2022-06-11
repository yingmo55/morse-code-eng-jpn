import React from 'react';
import './App.css';
import MorseTranslator from './Components/MorseTranslator';

function App() {

  
  return (
    <div className="App">
      <header>
        <h1>Morse Code Translator... But it also translates Japanese</h1>
        <p>Notice: Please don't use Kanji for the Japanese input mode. This web app isn't that advance yet</p>
      </header>
      <MorseTranslator />
    </div>
  );
}

export default App;
