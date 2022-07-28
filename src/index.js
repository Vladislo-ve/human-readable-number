module.exports = function toReadable(number) {
    const toTwentyArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',];
    const toHundredArr = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety',];

    const numberArray = String(number).split('');

    if (number <= 19) {
        return toTwentyArr[number];
    }

    if (number <= 99 && numberArray[1] === '0') {
        return toHundredArr[numberArray[0] - 2];
    }

    if (number <= 99) {
        return `${toHundredArr[numberArray[0] - 2]} ${toTwentyArr[numberArray[1]]}`
    }

    if (number <= 999 && numberArray[1] === '0' && numberArray[2] === '0') {
        return `${toTwentyArr[numberArray[0]]} hundred`
    }

    if (number <= 999 && numberArray[1] <= '1') {
        return `${toTwentyArr[numberArray[0]]} hundred ${toTwentyArr[Number(numberArray.slice(1, numberArray.length).join(''))]}`
    }

    if (number <= 999 && numberArray[2] === '0') {
        return `${toTwentyArr[numberArray[0]]} hundred ${toHundredArr[numberArray[1] - 2]}`
    }
    
    if (number <= 999) {
        return `${toTwentyArr[numberArray[0]]} hundred ${toHundredArr[numberArray[1] - 2]} ${toTwentyArr[numberArray[2]]}`
    }
}
