import { morseAlphabetDictionary, morseNumberDictionary,morseSymbolDictionary } from "../morseCode/morseCode";

const morseToLetter = (input: string): string => {


    const engMorseDictionary = {
        ...morseAlphabetDictionary,
        ...morseNumberDictionary,
        ...morseSymbolDictionary}
    const inputArray: string[] = input.split(' ');

    type keyValue = string[];

    const morseCodeKey: keyValue = Object.keys(engMorseDictionary);
    const morseCodeValue: keyValue = Object.values(engMorseDictionary);

    let newString: string ='';

    console.log(inputArray)    

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
    return newString;
    }

export default morseToLetter;