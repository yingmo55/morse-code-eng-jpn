type MorseDictionary = {
    [key: string]: string;
}

const morseAlphabetDictionary: MorseDictionary = {
'A': '.-',
'B': '-...',
'C': '-.-.',
'D': '-..',
'E': '.',
'F': '..-.',
'G': '--.',
'H': '....',
'I': '..',
'J': '.---',
'K': '-.-',
'L': '.-..',
'M': '--',
'N': '-.',
'O': '---',
'P': '.--.',
'Q': '--.-',
'R': '.-.',
'S': '...',
'T': '-',
'U': '..-',
'V': '...-',
'W': '.--',
'X': '-..-',
'Y': '-.--',
'Z': '--..'
}

const morseNumberDictionary: MorseDictionary = {
'0': '-----',
'1': '.----',
'2': '..---',
'3': '...--',
'4': '....-',
'5': '.....',
'6': '-....',
'7': '--...',
'8': '---..',
'9': '----.',
}

const morseSymbolDictionary: MorseDictionary = {
    '.': '.-.-.-',
    ',': '--..--',
    '?': '..--..',
    '\'': '.----.',
    '!': '-.-.--',
    '/': '-..-.',
    '(': '-.--.',
    ')': '-.--.-',
    '&': '.-...',
    ':': '---...',
    ';': '-.-.-.',
    '=': '-...-',
    "+": '.-.-.',
    '-': '-....-',
    '_': '..--.-',
    '"': '.-..-.',
    '$': '...-..-',
    '@': '.--.-.',
    ' ': '/'
}

// in iroha order
const morseJpnDictionary: MorseDictionary = {
'イ': '.-',
'ロ': '.-.-',
'ハ': '-...',
'ニ': '-.-.',
'ホ': '-..',
'ヘ': '.',
'ト': '..-..',
'チ': '..-.',
'リ': '--.',
'ヌ': '....',
'ル': '-.--.',
'ヲ': '.---',
'ワ': '-.-',
'カ': '.-..',
'ヨ': '--',
'タ': '-.',
'レ': '---',
'ソ': '---.',
'ツ': '.--.',
'ネ': '--.-',
'ナ': '.-.',
'ラ': '...',
'ム': '-',
'ウ': '..-',
'ヰ': '.-..-',
'ノ': '..--',
'オ': '.-...',
'ク': '...-',
'ヤ': '.--',
'マ': '-..-',
'ケ': '-.--',
'フ': '--..',
'コ': '----',
'エ': '-.---',
'テ': '.-.--',
'ア': '--.--',
'サ': '-.-.-',
'キ': '-.-..',
'ユ': '-..--',
'メ': '-...-',
'ミ': '..-.-',
'シ': '--.-.',
'ヱ': '.--..',
'匕': '--..-',
'モ': '-..-.',
'セ': '.---.',
'ス': '---.-',
'ン': '.-.-.',
'゛': '..',
'゜': '..--.'
}

const morseJpnSymbolDictionary: MorseDictionary = {
    'ー': '.--.-',
    '、': '.-.-.-',
    '。': '.-.-..',
    '（': '-.--.-',
    '）': '.-..-.'
}

export { morseAlphabetDictionary, morseNumberDictionary,morseSymbolDictionary, morseJpnDictionary, morseJpnSymbolDictionary }