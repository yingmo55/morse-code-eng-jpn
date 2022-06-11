import * as wanakana from 'wanakana';
import { sutegana, dakuon, hanDakuon} from '../jpnOthers/jpnOthers';
import { morseJpnSymbolDictionary } from '../morseCode/morseCode';

function parseJpnInput(input) {
    let result;
    let finalResult = '';
    let specialChar = Object.keys(morseJpnSymbolDictionary);

    if (!wanakana.isJapanese(input)) {

        return 'Invalid input. This is not Japanese.'
    }
    
    // to verify if there are any invalid character 
    for (let char of input) {
        if (!wanakana.isKana(char) && !specialChar.includes(char)){
            return 'Invalid input. This app does not support Kanji input yet, or you input a special character that is not supported.'
        }
    }
    result = wanakana.toKatakana(input, { useObsoleteKana: true })

    // parsing the information to make it ready for morse code
    const resultArray = Array.from(result)
    // change sutegana to  full size kana
    const suteganaKey = Object.keys(sutegana);
    const dakuonKey = Object.keys(dakuon);
    const hanDakuonKey = Object.keys(hanDakuon);

    for(let i=0; i < resultArray.length; i++) {

        if (suteganaKey.includes(resultArray[i])){
            resultArray[i] = sutegana[resultArray[i]];
        } else if (dakuonKey.includes(resultArray[i])) {

            resultArray[i] = dakuon[resultArray[i]];
        } else if (hanDakuonKey.includes(resultArray[i])) {
            resultArray[i] = hanDakuon[resultArray[i]];
        }
    }

    //flatten the array
    
    if (resultArray.length > 0) {
        const flattenResult = [];

        for(let i=0; i < resultArray.length; i++) {
            if (typeof(resultArray[i]) !== 'string') {
                resultArray[i].forEach(element => {
                    flattenResult.push(element)
                });
            } else {
                flattenResult.push(resultArray[i])
            }
        }
        finalResult = flattenResult.join('');
}

    return finalResult;
}

export default parseJpnInput;