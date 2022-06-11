import { morseAlphabetDictionary, morseNumberDictionary,morseSymbolDictionary, morseJpnDictionary, morseJpnSymbolDictionary } from "../morseCode/morseCode";
import parseJapaneseInput from "../parseJapaneseInput/parseJapaneseInput";

const letterToMorse = (input: string, isJapanese?: boolean): string => {
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
    input = isJapanese ? parseJapaneseInput(input) : input.toUpperCase()

    let newString: string ='';

    // warning: Function declared in a loop contains unsafe references to variable(s) 'newString'
    for (let i=0; i < input.length; i++) {

            if (input[i] in dictionary) {
                console.log(input[i])
                console.log(dictionary[input[i]] )
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