'use strict';
console.log('form.js file was loaded');

/* 5. Sukurk du input'us - vieną, kur vartotojas įves savo vardą; kitą - skaičių. 
Pirma, patikrink ar skaičius sveikas (jei ne - alert). J
ei sveikas, po apačia sukurk h2 elementą kur vardas bus atkartotas tiek kartų, kiek skaičius nurodo. */

// taikomes
const formEl = document.getElementById('kartokForm');
const vardasEl = document.getElementById('vardas');
const timesEl = document.getElementById('times');

const makeOneH2AndAppend = function (h2Text) {
  const h2El = document.createElement('h2');
  h2El.textContent = h2Text;
  formEl.after(h2El);
};

// makeOneH2AndAppend('Serbentautas');

formEl.addEventListener('submit', (event) => {
  // sustabdyt perkrovima
  event.preventDefault();
  console.log('js control the form');
  //tolimesne logika
  // paimti inputu reiksmes
  const formValues = {
    vardas: vardasEl.value,
    kiekKartu: Number(timesEl.value),
  };
  console.log('formValues ===', formValues);

  // Pirma, patikrink ar skaičius sveikas (jei ne - alert)
  if (!Number.isInteger(formValues.kiekKartu)) {
    // skaicius NEsveikas
    alert('ivesti sveika skaiciu, jokiu ligoniu');
    return;
  }
  // Skaicius yra sveikas
  // po apačia sukurk h2 elementą kur vardas bus atkartotas tiek kartų, kiek skaičius nurodo.
  for (let i = 0; i < formValues.kiekKartu; i++) {
    // console.count('spausdinti');
    makeOneH2AndAppend(formValues.vardas);
  }
});
