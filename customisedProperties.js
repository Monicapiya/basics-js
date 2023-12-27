const users = {
  id: 1,
  name: 'Joe',
  age: 20,
  };
  
  console.log(Object.getOwnPropertyDescriptor(users, 'name'));

  /*
Output:

{
  value: 'Joe',
  writable: true,
  enumerable: true,
  configurable: true
}

*/


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

  Object.defineProperty(tsla, 'stIdx', {
    writable: false,
    });
    
    Object.defineProperty(tesla, 'stExc', {
    value: 'NASDAQ',
    writable: true,
    enumerable: false,
    });
    
  
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

{
  stIdx: 23456,
  stName: 'Tsla',
  stCurrPrc: 346.12,
  stExc: 'NASDAQ',
  stDetails: {
    name: 'TESLA Inc',
    ceo: 'Elon Musk',
    hq: 'Paolo Alto, California, US'
  }
}
{
  stIdx: 23456,
  stName: 'Tsla',
  stCurrPrc: 346.12,
  stDetails: {
    name: 'TESLA Inc',
    ceo: 'Elon Musk',
    hq: 'Paolo Alto, California, US'
  }
}
' Tsla is trading for $346.12 on NASDAQ'
' TESLA Inc is headquaters are in $Paolo Alto, California, US and headed by Elon Musk'
{ stIdx: 23456 }

*/



const Car = function () {
    let brand = '';
    let model = '';
    let transmission = '';
    let color = '';
    let changeLog = [];
    Object.defineProperties(this, {
      id: {
        enumerable: true,
        value: `CAR-012X-DB1`,
      },
      brand: {
        enumerable: true,
        set(val) {
          changeLog.push(`Brand changed to ${val}`);
          brand = val;
        },
        get() {
          return brand;
        },
      },
      model: {
        enumerable: true,
        set(val) {
          changeLog.push(`Model changed to ${val}`);
          model = val;
        },
        get() {
          return model;
        },
      },
      transmission: {
        enumerable: true,
        set(val) {
          changeLog.push(`Transmission changed to ${val}`);
          transmission = val;
        },
        get() {
          return transmission;
        },
      },
      color: {
        enumerable: true,
        set(val) {
          changeLog.push(`Color changed to ${val}`);
          color = val;
        },
        get() {
          return color;
        },
      },
      changeLog: {
        enumerable: false,
        get() {
          return changeLog;
        },
      },
    });
  };

const Civic = new Car();

Civic.brand = 'Honda';
Civic.model = 'Civic';
Civic.transmission = 'AT';
Civic.color = 'Galaxy Grey';

Civic.model = 'Civic 1.8S';
Civic.color = 'Pearl White';

for (let prop in Civic) {
  console.log(`${prop}: ${Civic[prop]}`);
}

console.log(Civic.changeLog);


/*
Output:

[
  'Brand changed to Honda',
  'Model changed to Civic',
  'Transmission changed to AT',
  'Color changed to Galaxy Grey',
  'Model changed to Civic 1.8S',
  'Color changed to Pearl White'
]


*/

