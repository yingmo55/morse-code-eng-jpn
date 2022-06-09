import React, { useState, useEffect } from 'react';
import './App.css';
import TextInput from './Components/TextInput/TextInput';
import letterToMorse from './Components/LetterToMorseCode/LetterToMorse';

function App() {

  const [ userInput, setUserInput ] = useState<string>('');
  const [ output, setOutput ] = useState('');

  const updateInput = (input:string) => {
    setUserInput(input)
  }

  useEffect(()=> {
    setOutput(letterToMorse(userInput))
  }, [userInput])

  return (
    <div className="App">
      <header>
        <h1>Morse Code Translator</h1>
      </header>
      <TextInput label={'Input'} readOnly={false} updateInput={updateInput} />
      <TextInput label={'Output'} readOnly={true} output={output} />
    </div>
  );
}

export default App;
