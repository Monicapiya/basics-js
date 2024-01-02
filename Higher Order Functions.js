/*
Higher order functions ingest existing functions and amp up their capabilities or augment it in such a way that the usage signature more or less remains the same.

*/
import cart from './HOF_cart.json';
import { renderRows, renderTotals } from './HOF_view';
const currencyPicker = document.querySelector("select[name='currency-picker']");


import currencyRates from './HOF_currencyRates.json';

currencyPicker.innerHTML = Object.keys(currencyRates)
  .map((key) => `<option>${key}</option>`)
  .join('');


  const computeCart = function () {
    const currency = this?.value;
    currencyConvert(currency, currencyRates, renderRows)(cart);
    currencyConvert(currency, currencyRates, renderTotals)(cart);
  };

computeCart();

currencyPicker.addEventListener('change', computeCart);

const currencyConvert = (currency, rates, fn) => {
  const conversionRate = rates[currency] ?? 1;
  return (cart) => {
    const revised = cart.map((item) => {
      return {
        ...item,
        cost: item.cost * conversionRate,
      };
    });
    return fn(revised);
  };
};