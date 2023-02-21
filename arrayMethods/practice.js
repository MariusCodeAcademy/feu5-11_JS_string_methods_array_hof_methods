'use strict';
console.log('practice.js file was loaded');

//
const outputEl = document.getElementById('app');

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

  // ternary version
  allSuperPositiveArr.push(sk < 0 ? sk * -1 : sk);

  // kitas budas
  // allSuperPositiveArr.push(Math.abs(sk));
});
console.log('allSuperPositiveArr ===', allSuperPositiveArr);

// 3. parasyti funkcija kuri grazina vidurki numArray

function getAvg(arr) {
  let total = 0;
  arr.forEach((sk) => {
    total += sk;
  });
  console.log('total ===', total);
  const avg = total / arr.length;
  console.log('avg ===', avg.toFixed(2));
}

const skArr = [1, 2, 3, 4, 5, 6];

getAvg(numArray);
getAvg(skArr);

// 3. sukurti funkcija kuri argumentu gauna stringa pvz 'lape' ir sukuria html h3 elementa su viduje esanciu tekstu kurio pirmoji raide paversta i didziaja ir pataplina elementa i dokumento body apacia pvz `<h3>Lape</h3>`

const makeFirstCappital = (strToBeTransformed) => {
  return (
    strToBeTransformed.charAt(0).toUpperCase() + strToBeTransformed.slice(1)
  );
};
const didSer = makeFirstCappital('serbentautas');
console.log('didSer ===', didSer);
printToHtml(didSer);

function addH3ToHtml(str) {
  // sukurti h3 elementa
  const h3El = document.createElement('h3');
  // prideti jam texta padidinta raide
  h3El.textContent = makeFirstCappital(str);
  console.log('h3El ===', h3El);
  console.dir(h3El);
  h3El.style.padding = '16px';
  // patalpinti body pabaiga
  document.body.appendChild(h3El);
}
addH3ToHtml('lape');
addH3ToHtml('serbentautas');

function printToHtml(str) {
  const h2El = document.createElement('h2');
  h2El.textContent = str;
  outputEl.append(h2El);
}

// 4. `
const proverb =
  'sesi eina po penkiu, bet tuo paciu sesi eina pries septynis. Ir sesi yra trisdesim sesi padalinta is sesiu';
printToHtml(proverb);

//   1. pakeisti pirma 'sesi' i '6' replace()
const oneSesi = proverb.replace('sesi', 6);
printToHtml(oneSesi);
//   2. pakeisti visus 'sesi' i 'six' replace(//)
// const allSesi = proverb.replaceAll('sesi', 'six');
const allSesi = proverb.replaceAll(/sesi/g, 'six');
printToHtml(allSesi);
