import * as wanakana from 'wanakana';

function sanitizeJapaneseInput(input) {
    let result;
    if (!wanakana.isJapanese(input)) {
        return 'Invalid input. This is not Japanese.'
    }
    if (!wanakana.isKana(input)){
        return 'Invalid input. This app does not support Kanji input yet.'
    }
    result = wanakana.toKatakana(input, { useObsoleteKana: true })

    // parsing the information to make it ready for morse code
    return result;
}

export default sanitizeJapaneseInput;