'use strict';

function findLongestWord(strin) {

    let stringArr = strin.split(' ');
    let longestWord = stringArr[0];
    for (let stringArrWord of stringArr) {
        if (stringArrWord.length > longestWord.length) {
            longestWord = stringArrWord;
        }
    }
    return longestWord;

};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
console.log(findLongestWord('Google do a roll')); // 'Google'
console.log(findLongestWord('May the force be with you')); // 'force'