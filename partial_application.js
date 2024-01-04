/*
Partially applied functions allow you to fulfil multiple arguments but leave the rest for future fulfilment. This is incredibly useful because it lets you create template functions that need not be invoked with every argument every single time.

Partial application starts with a function. We take this function and create a new one with one or more of its arguments already “set” or partially applied. This sounds odd, but it will reduce the number of parameters needed for our functions.



*/

import data from './data.json';
import Row from './Row';
import { taxes, shipping } from './computeCost';
const productsDiv = document.querySelector('#products');

const renderRows = function (items) {
  const domNodes = items
    .map(({ product, cost, totalCost = 'N/A' }) =>
      Row(product, cost, totalCost)
    )
    .join('');

  productsDiv.innerHTML = domNodes;
};

(function () {
  const reviseData = data.map((item) => {
    return {
      ...item,
      totalCost: !item.shipping
        ? shipping[item.category](item.cost)
        : ['smartphones', 'petfood'].includes(item.category)
        ? taxes.tax12(item.shipping, item.cost)
        : taxes.tax18(item.shipping, item.cost),
    };
  });

  renderRows(reviseData);
})();


// example

listAnd("red", "green", "blue");    // "red, green and blue"

listOr("red", "green", "blue");      // "red, green or blue"listWith("red", "green", "blue");    // "red, green with blue"

// To do this, we need to create a partial utility function:

const partial = (fn, firstArg) => {  return (...lastArgs) => {    return fn(firstArg, ...lastArgs);  }}

