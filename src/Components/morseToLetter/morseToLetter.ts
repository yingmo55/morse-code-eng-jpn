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

    // warning: Function declared in a loop contains unsafe references to variable(s) 'newString'
    for (let i=0; i < inputArray.length; i++) {
            if (morseCodeValue.indexOf(inputArray[i]) > -1) {
                let indexOfChara: number = morseCodeValue.indexOf(inputArray[i]) 
                newString += i === (inputArray.length - 1) ? morseCodeKey[indexOfChara] : morseCodeKey[indexOfChara] + ' ';

            }  else {
                newString = 'Invalid input detected.'
                break;
            }

        }
    return newString;
    }

export default morseToLetter;