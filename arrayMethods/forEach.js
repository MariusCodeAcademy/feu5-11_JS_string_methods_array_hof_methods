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
  arr[idx] = dviguba;
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
// sukukti cikla
/// jo metu deti i kibireli reikmes
// po ciklu kibirelyje bus suma
