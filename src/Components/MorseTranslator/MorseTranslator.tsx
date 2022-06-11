import React, { useState, useEffect } from 'react';
import TextInput from '../TextInput/';
import letterToMorse from '../letterToMorse';
import morseToLetter from '../morseToLetter';

import { Switch } from '@mui/material';

function MorseTranslator() {

  const [ userInput, setUserInput ] = useState<string>('');
  const [ output, setOutput ] = useState('');  
  // false if user input is words, true if user input is morse code. Default true
  const [ wordToMorse, setWordToMorse ] = useState<boolean>(false);
  //engOrJpn: ENG if false, JPN if true. Default: false
  const [ engOrJpn, setEngOrJpn ] = useState<boolean>(false)


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
    setOutput(letterToMorse(userInput, engOrJpn));
  } else {
    setOutput(morseToLetter(userInput, engOrJpn))    
  }
  }, [userInput, wordToMorse, engOrJpn])

  useEffect(()=>{
      const newInput = output;
      setUserInput(newInput)
  }, [wordToMorse]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(()=>{
    setUserInput('');
  }, [engOrJpn])

  return (
    <>
      <div>
        <span>Switch to English</span>
        <Switch {...label}
        checked={engOrJpn} 
        onChange={toggleLanguage} />
        <span>Switch to Japanese</span>
      </div>
      <div>
        <span>{!engOrJpn? 'English' : 'Japanese'} to Morse</span>
        <Switch {...label} 
        checked={wordToMorse} 
        onChange={toggleWordToMorse} />
        <span>Morse to {!engOrJpn? 'English' : 'Japanese'}</span>
        <p>currently: {!wordToMorse ? !engOrJpn? 'English' : 'Japanese' : 'Morse' } to { !wordToMorse ? 'Morse' : !engOrJpn? 'English' : 'Japanese' }  </p>
      </div>
      <TextInput label={'Input'} readOnly={false} updateInput={updateInput} input={userInput} />
      <TextInput label={'Output'} readOnly={true} output={output} />
    </>
  );
}

export default MorseTranslator;
