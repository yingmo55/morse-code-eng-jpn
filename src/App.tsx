import React, { useState, useEffect } from 'react';
import './App.css';
import TextInput from './Components/TextInput/TextInput';
import letterToMorse from './Components/LetterToMorseCode/LetterToMorse';
import morseToLetter from './Components/morseToLetter/morseToLetter';
import { Switch } from '@mui/material';

function App() {

  const [ userInput, setUserInput ] = useState<string>('');
  const [ output, setOutput ] = useState('');
  const [ wordToMorse, setWordToMorse ] = useState<boolean>(false);
  // false if user input is words, true if user input is morse code. Default true
  const [ engOrJpn, setEngOrJpn ] = useState<boolean>(false)
  //engOrJpn: ENG if false, JPN if true. Default: false

  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  const updateInput = (input:string) => {
    setUserInput(input)
  }

  const toggleLanguage = () : void => {
    setEngOrJpn((prev)=> !prev)
  }

  const toggleWordToMorse = (): void => {
    setWordToMorse((prev)=> !prev)
  }

  useEffect(()=> {
    if (!wordToMorse){
    setOutput(letterToMorse(userInput));
  } else {
    setOutput(morseToLetter(userInput))    
  }
  }, [userInput, wordToMorse])

  return (
    <div className="App">
      <header>
        <h1>Morse Code Translator... But it also translates Japanese</h1>
        <p>Notice: Please don't use Kanji for the Japanese input mode. This web app isn't that advance yet</p>
      </header>
      <div>
        Switch to English
        <Switch {...label}
        checked={engOrJpn} 
        onChange={toggleLanguage} />
        Switch to Japanese
      </div>
      <div>
        {!engOrJpn? 'English' : 'Japanese'} to Morse
        <Switch {...label} 
        checked={wordToMorse} 
        onChange={toggleWordToMorse} />
        Morse to {!engOrJpn? 'English' : 'Japanese'}
        <p>currently: {!engOrJpn? 'English' : 'Japanese'} </p>
      </div>
      <TextInput label={'Input'} readOnly={false} updateInput={updateInput} input={userInput} />
      <TextInput label={'Output'} readOnly={true} output={output} />
    </div>
  );
}

export default App;
