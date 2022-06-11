import { morseAlphabetDictionary, morseNumberDictionary,morseSymbolDictionary, morseJpnDictionary, morseJpnSymbolDictionary } from "../morseCode/morseCode";
import parseJpnOutput from '../parseJpnOutput/parseJpnOutput';

const morseToLetter = (input: string, isJapanese: boolean): string => {
    if (!input){
        return '';
    }

    type keyValue = string[];

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
    

    const morseCodeKey: keyValue = Object.keys(dictionary);
    const morseCodeValue: keyValue = Object.values(dictionary);

    let newString: string ='';

    if (input){
        const inputArray: string[] = input.split(' ');

        for (let i=0; i < inputArray.length; i++) {
            if (morseCodeValue.indexOf(inputArray[i]) > -1) {
                let indexOfChara: number = morseCodeValue.indexOf(inputArray[i]) 
                newString += morseCodeKey[indexOfChara];

            } else if (i === (inputArray.length - 1) && inputArray[i].length === 0) {
                    newString += ' ';
            } else {
                newString = 'Invalid input detected.'
                break;
            }

        }
    }

    if (isJapanese) {
        newString = parseJpnOutput(newString);
    }

    return newString;
    }

export default morseToLetter;