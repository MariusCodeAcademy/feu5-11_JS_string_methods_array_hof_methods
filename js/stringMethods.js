'use strict';
console.log('stringMethods.js file was loaded');

//                 0123456789    210
const pvzString = 'I am Mike from Uk';

console.log('pvzString ===', pvzString);

// String.slice(start, end)
// gauti 'I am'
const iAm = pvzString.slice(0, 4);
console.log('iAm ===', iAm);

// gauti 'from' zodeli is stringo su slice neigiamais argumentais
const from = pvzString.slice(-7, -3);
console.log('from ===', from);

// gauti viska isskyrus pirmus 2 zodzius
const allButFirstTwo = pvzString.slice(5);
console.log('allButFirstTwo ===', allButFirstTwo);

// padidinam i diziasias raides
const upper = allButFirstTwo.toUpperCase();
console.log('upper ===', upper);

//                    10        20
//          012345678901234567890123456789
let str1 = 'Brown fox jumped over the lazy dog fox.';
console.log('str1 ===', str1);
// pakeisti fox i lape ir issaugoti naujame kintamajame
// String.prototype.replace('ka pakeist', 'kuom pakeist')

const lapeStr = str1.replace('fox', 'lape');
console.log('lapeStr ===', lapeStr);

// replave su regular expression, regex
// g - global match - keicia visus zodzius
// i - case insensitive - nesvarbu dizioji ar mazoji raides
const lapeRegex = str1.replace(/fOx/gi, 'lape');
console.log('lapeRegex ===', lapeRegex);

// String.prototype.charAt(stringoIndexas) - grazina raide kuri yra toje vietoje
const str2 = 'the lazy dog';
const str3 = 'the lazy dog fox';
const str4 = 'the lazy';

// gauti pirmaja raide
const firstLetter = str2.charAt(0);
console.log('firstLetter ===', firstLetter);

// atspausdinti paskutine raide bet kokio ilgio stringe?
const str2Ilgis = str2.length;
console.log('str2Ilgis ===', str2Ilgis);

const lastLetter = str2.charAt(str2Ilgis - 1);
const lastLetterStr3 = str3.charAt(str3.length - 1);
console.log('lastLetter ===', lastLetter);
console.log('lastLetterStr3 ===', lastLetterStr3);

// su charAt arba slice parasyti funkcija kuri atspausdina ir grazina str4 stringa su prima diziaja raide. 'The lazy'
