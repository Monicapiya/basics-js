const tsla = {
  stIdx:23456,
  stName:'Tsla',
  stCurrPrc: 346.12,
  stExc:'NASDAQ',
  stDetails: {
  name: 'TESLA Inc',
  ceo: 'Elon Musk',
  hq: 'Paolo Alto, California, US',
  },
  };
  
  let {
  
  stName: stock,
  stCurrPrc: value,
  stExc: exchange,
  stDetails: {
  name: company, ceo, hq
  }, 
  ...rest
  }= tsla;

  console.log(` ${stock} is trading for $${value} on ${exchange}`);
  console.log(` ${company} is headquaters are in $${hq} and headed by ${ceo}`);
  console.log(rest);

  /*
Output:

' Tsla is trading for $346.12 on NASDAQ'
' TESLA Inc is headquaters are in $Paolo Alto, California, US and headed by Elon Musk'
{ stIdx: 23456 }

*/


const apple = {
  id: 209891,
  company: 'Apple Inc',
  exchange: 'NASDAQ',
  symbol: 'AAPL',
  currPrice: 120.07,
  details: {
    ceo: 'Tim Cook',
    hq: 'Cupertino, California, US',
  },
};

// Write your code below this line

const {
    company,
    exchange,
    currPrice,
    details: { ceo },
}= apple;
  

// Write your code above this line
try {
  console.log(
    `${company} headed by ${ceo} was trading for $${currPrice} on ${exchange}`
  );
} catch (error) {
  console.log('Stock data could not be accessed...');
}

/*
Output:

Apple Inc headed by Tim Cook was trading for $120.07 on NASDAQ

*/


