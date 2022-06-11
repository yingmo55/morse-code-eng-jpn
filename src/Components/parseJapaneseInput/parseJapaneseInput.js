import * as wanakana from 'wanakana';
import { sutegana, dakuon, hanDakuon} from '../jpnOthers/jpnOthers';

function parseJapaneseInput(input) {
    let result;
    let finalResult = '';
    if (!wanakana.isJapanese(input)) {
        return 'Invalid input. This is not Japanese.'
    }
    if (!wanakana.isKana(input)){
        return 'Invalid input. This app does not support Kanji input yet.'
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

export default parseJapaneseInput;