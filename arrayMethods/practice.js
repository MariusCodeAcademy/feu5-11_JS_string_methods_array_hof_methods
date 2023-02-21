'use strict';
console.log('practice.js file was loaded');

const numArray = [5, 15, -2, 0, -5, 7];
console.log('numArray ===', numArray);
// 1. atrinkti teigiamas reiksmes i nauja masyva

const positivesArr = [];

numArray.forEach((oneSk) => {
  if (oneSk > 0) {
    positivesArr.push(oneSk);
  }
});

console.log('positivesArr ===', positivesArr);

// 2. naujame masyve paversti numArray neigiamus skaicius teigiamais

const allSuperPositiveArr = [];
numArray.forEach(function (sk) {
  // if (sk < 0) {
  //   allSuperPositiveArr.push(sk * -1);
  // } else {
  //   allSuperPositiveArr.push(sk);
  // }

  // kitas budas
  allSuperPositiveArr.push(Math.abs(sk));
});
console.log('allSuperPositiveArr ===', allSuperPositiveArr);
