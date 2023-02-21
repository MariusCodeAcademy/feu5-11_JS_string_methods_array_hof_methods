'use strict';
console.log('forEach.js file was loaded');

const skArr = [1, 2, 3, 4, 5, 6];

// Array.prototype.forEach(function(reiksme, index, patsMasyvas) {})

// su for of atspausdinti visas arr reiksmes padvigubintas

for (let sk of skArr) {
  // console.log('sk ===', sk * 2);
}
console.log('----');

skArr.forEach((sk, idx, arr) => {
  console.log(`index: ${idx}, skaicius ${sk}`);
  const dviguba = sk * 2;
  // arr[idx] = dviguba;
});
console.log('skArr po dvigubo ===', skArr);

console.log('----');
// forEach su isorine funckija
skArr.forEach(triple);

function triple(oneNum) {
  // console.log('oneNum ===', oneNum * 3);
}

// su forEach suskaiciuoti musu masyvo el suma

// psiaudo kodas
// sukurti kibirelio kintamaji
let total = 0;
// sukukti cikla
skArr.forEach((sk) => {
  /// jo metu deti i kibireli reikmes
  total += sk;
});
// po ciklu kibirelyje bus suma
console.log('total ===', total);

// atrinkti i nauja masyva reiksmes didesnes uz 4
const moreThanFourArr = [];
skArr.forEach((sk) => {
  if (sk >= 4) {
    moreThanFourArr.push(sk);
  }
});
console.log('moreThanFourArr ===', moreThanFourArr);

// suskaiciuoti kiek masyve yra lyginiu skaiciu
// parasyti funkcija kuri grazina kiek masyve yra lyginiu skaiciu

function howManyLyginiai() {
  // susikurti kibireli
  let lyginiuRadau = 0;
  // sukti cikla
  skArr.forEach((sk) => {
    // tikrinti surasti ar sk yra lyginis
    if (sk % 2 === 0) {
      console.log('lyginis ===', sk);
      /// jei TAIP - tai deti vieneta i kibireli
      lyginiuRadau++;
    }
  });
  console.log('lyginiuRadau ===', lyginiuRadau);
  return lyginiuRadau;
}
howManyLyginiai();

//     <ul id="numListUl">
// norim atspausdinti visu li el reikmes
const ulEl = document.getElementById('numListUl');
const liEls = ulEl.querySelectorAll('li');
console.log('liEls ===', liEls);

liEls.forEach((singleLiEl) => {
  console.log('singleLiEl.textContent ===', singleLiEl.textContent);
  singleLiEl.textContent = `Item ${singleLiEl.textContent}`;
});
