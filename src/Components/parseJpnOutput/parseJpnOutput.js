import { dakuon, hanDakuon} from '../jpnOthers/jpnOthers';

function parseJpnOutput(input) {
    const dakuonKey = Object.keys(dakuon);
    const dakuonValue = Object.values(dakuon);
    const hanDakuonKey = Object.keys(hanDakuon);
    const hanDakuonValue = Object.values(hanDakuon);

    const inputArray = Array.from(input);
    let finalResult = [];

    for (let i=0; i < inputArray.length; i++) {
         if ( inputArray[i] === '゛') {
            let prevChar = inputArray[i - 1];

            for (let y=0; y < dakuonValue.length; y++) {
                if (dakuonValue[y].includes(prevChar) && inputArray[i] === '゛' ) {
                    finalResult.pop()
                    finalResult.push(dakuonKey[y])
                }
            }
         } else if (inputArray[i] === '゜') {
            for (let z=0; z < hanDakuonValue.length; z++) {
                let prevChar = inputArray[i - 1];
                if (hanDakuonValue[z].includes(prevChar)) {
                    finalResult.pop()
                    console.log(hanDakuonKey[z])
                    finalResult.push(hanDakuonKey[z])
                }
             } 
         }
         
         else {
             finalResult.push(inputArray[i]);
         }
    }

    const finalResultStr = finalResult.join('');

    return finalResultStr;
}

export default parseJpnOutput;