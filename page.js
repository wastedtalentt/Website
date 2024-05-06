const exchangeRates = {
    usd: 2.7,
    euro: 3,
    gel: 1,
};

const amount = document.getElementById('amount');
const from = document.getElementById('from');
const to = document.getElementById('to');
const convert = document.getElementById('convert');
const result = document.getElementById('result');

amount.addEventListener('input', (e) => {
    console.log('Input value:', amount.value);
});

from.addEventListener('change', (e) => {
    console.log('Change value:', from.value);
});

to.addEventListener('change', (e) => {
    console.log('Change value:', to.value);
});

convert.addEventListener('click', () => {
    console.log('Button clicked');
    let fromCurrency = from.value;
    let toCurrency = to.value;
    
    
    let conversionRate = exchangeRates[fromCurrency] / exchangeRates[toCurrency];
    
   
    let exchanged = amount.value * conversionRate;
    
    
    result.value = exchanged.toFixed(2);
});
