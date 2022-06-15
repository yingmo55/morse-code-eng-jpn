import React, { useState, useEffect } from 'react';
import './MorseTranslator.css';

import TextInput from '../TextInput/';
import letterToMorse from '../letterToMorse';
import morseToLetter from '../morseToLetter';

import ToggleSwitch from '../ToggleSwitch';
import { Button, Snackbar, Alert } from '@mui/material';

function MorseTranslator() {

  const [ userInput, setUserInput ] = useState<string>('');
  const [ output, setOutput ] = useState('');  
  // false if user input is words, true if user input is morse code. Default true
  const [ wordToMorse, setWordToMorse ] = useState<boolean>(false);
  //engOrJpn: ENG if false, JPN if true. Default: false
  const [ engOrJpn, setEngOrJpn ] = useState<boolean>(false)
  const [ isPopup, setIsPopup ] = useState<boolean>(false)

  const updateInput = (input:string) => {
    setUserInput(input)
  }

  const toggleLanguage = () : void => {
    setEngOrJpn((prev)=> !prev)
  }

  const toggleWordToMorse = (): void => {
    setWordToMorse((prev)=> !prev)
  }

  const copyToClipboard = async (): Promise<void> => {
      if (output) {
        await navigator.clipboard.writeText(output)
        setIsPopup(true)
      }
  }

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setIsPopup(false);
  };

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
      <ToggleSwitch switchLabel1={'Switch to English'} 
                    switchLabel2={'Switch to Japanese'} 
                    checked={engOrJpn} 
                    onChange={toggleLanguage}
                    ariaLabel='switch between English or Japanese input' />
      <ToggleSwitch switchLabel1={`${!engOrJpn? 'English' : 'Japanese'} to Morse`} 
                    switchLabel2={`Morse to ${!engOrJpn? 'English' : 'Japanese'}`} 
                    checked={wordToMorse} 
                    onChange={toggleWordToMorse}
                    ariaLabel='switch between Morse code or text input'  />
      
      <p>currently: {!wordToMorse ? !engOrJpn? 'English' : 'Japanese' : 'Morse' } to { !wordToMorse ? 'Morse' : !engOrJpn? 'English' : 'Japanese' }  </p>
    
      <div className='textfields'>
        <TextInput label={'Input'} readOnly={false} updateInput={updateInput} input={userInput} />
        <TextInput label={'Output'} readOnly={true} output={output} />
        <Button variant="contained" onClick={copyToClipboard}>Copy Result to Clipboard</Button>
        <Snackbar open={isPopup} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Copied to clipboard!
          </Alert>
      </Snackbar>
      </div>
    </>
  );
}

export default MorseTranslator;
