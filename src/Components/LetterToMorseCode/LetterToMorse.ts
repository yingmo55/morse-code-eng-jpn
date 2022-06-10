import { morseAlphabetDictionary, morseNumberDictionary,morseSymbolDictionary } from "../morseCode/morseCode";

const letterToMorse = (input: string): string => {
    const engMorseDictionary = {
        ...morseAlphabetDictionary,
        ...morseNumberDictionary,
        ...morseSymbolDictionary}
    input = input.toUpperCase()
    let newString: string ='';

    // warning: Function declared in a loop contains unsafe references to variable(s) 'newString'
    for (let i=0; i < input.length; i++) {

            if (input[i] in engMorseDictionary) {
                newString += i === (input.length - 1) ? 
                            engMorseDictionary[input[i]] : engMorseDictionary[input[i]] + ' '
            }  else {
                newString = 'Invalid input detected.'
                break;
            }
        }
    return newString;
    }

export default letterToMorse;