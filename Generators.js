function* generate() {
  console.log("invoked 1st time");
  yield 1;
  console.log("invoked 2nd time");
  yield 2;
}

let gen = generate();

console.log(gen);

/*
Output:

Object [Generator] {}

*/

function* generate() {
  console.log("invoked 1st time");
  yield 1;
  console.log("invoked 2nd time");
  yield 2;
}

let gen = generate();

console.log(gen);

let result = gen.next();
console.log(result);

result = gen.next();
console.log(result);

/*
Output:

Object [Generator] {}
'invoked 1st time'
{ value: 1, done: false }
'invoked 2nd time'
{ value: 2, done: false }
{ value: 2, done: false }

*/

function* generate() {
  console.log("invoked 1st time");
  yield 1;
  console.log("invoked 2nd time");
  yield 2;
}

let gen = generate();

for (const g of gen) {
  console.log(g);
}

/*
Output:

'invoked 1st time'
1
'invoked 2nd time'
2

*/

function* forever() {
  let index = 0;
  while(true) {
  yield index++;
  
  }
  }
  
  
  let f = forever();
  
  console.log(f.next());
  console.log(f.next());
  console.log(f.next());

  /*
Output:

{ value: 0, done: false }
{ value: 1, done: false }
{ value: 2, done: false }

*/


  
