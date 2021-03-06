import { morseAlphabetDictionary, morseNumberDictionary,morseSymbolDictionary, morseJpnDictionary, morseJpnSymbolDictionary } from "../morseCode/morseCode";
import parseJpnInput from "../parseJpnInput/parseJpnInput";

const letterToMorse = (input: string, isJapanese: boolean): string => {

    if (!input){
        return '';
    }
    
    // isJapanese: false if English, True if Japanese
    const engMorseDictionary = {
        ...morseAlphabetDictionary,
        ...morseNumberDictionary,
        ...morseSymbolDictionary
    }
    const jpnMorseDictionary = {
        ...morseJpnDictionary,
        ...morseJpnSymbolDictionary
    }

    let dictionary = isJapanese ? jpnMorseDictionary : engMorseDictionary;
    
    // sanitize input before translating
    input = isJapanese ? parseJpnInput(input) : input.toUpperCase()

    let newString: string ='';

    // warning: Function declared in a loop contains unsafe references to variable(s) 'newString'
    for (let i=0; i < input.length; i++) {

            if (input[i] in dictionary) {
                newString += i === (input.length - 1) ? 
                dictionary[input[i]] : dictionary[input[i]] + ' '
            }  else {
                newString = 'Invalid input detected.'
                break;
            }
        }
    return newString;
    }

export default letterToMorse;