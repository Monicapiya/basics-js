

const Tasks = function (title) {
  this.title = title ?? 'My Tasks';
  this.taskList = [];
  this.showTasks = function () {
  console.log(`----${this.title}----`);
  this.taskList.forEach((item, index) =>
  console.log(`${index + 1}. ${item}`)
  );
  };
  this.add = function (item) {
  this.taskList = [item, ...this.taskList];
  };
  };
  
  const myTasks = new Tasks('Daily Tasks');
  myTasks.add('Book movie tickets');
  myTasks.add('send UX Development proposal');
  myTasks.showTasks();
  
  const shopping = new Tasks('Shopping');
  shopping.add('Buy HDMI cable');
  shopping.add('Order cat food');
  shopping.showTasks();
  
  /*
output:

'----Daily Tasks----'
'1. send UX Development proposal'
'2. Book movie tickets'
'----Shopping----'
'1. Order cat food'
'2. Buy HDMI cable'

*/

const numArray = [
  [2, 3],
  [12, 32],
  [6, 7],
  [45, 55, 66],
  ];
  
  const isGreater = (a, b) => a > b ? `${a} is greater than ${b}` : `${b} is greater than ${a}`;
  
  numArray.forEach((elem) => console.log(isGreater(...elem)));
  
  /*
output:

'3 is greater than 2'
'32 is greater than 12'
'7 is greater than 6'
'55 is greater than 45'

*/
