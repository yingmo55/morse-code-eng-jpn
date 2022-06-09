import { morseDictionary } from "../morseCode/morseCode";

const letterToMorse = (input: string): string => {
    const DictionaryKey: string[] = Object.keys(morseDictionary);
    input = input.toUpperCase()
    let newString: string ='';

    // warning: Function declared in a loop contains unsafe references to variable(s) 'newString'
    for (let i=0; i < input.length; i++) {
        DictionaryKey.forEach((dict)=> {
            if (input[i] in (morseDictionary as any)[dict]) {
                newString += (morseDictionary as any)[dict][input[i]] + ' '
            }
        })
    }
    return newString;
}

export default letterToMorse;