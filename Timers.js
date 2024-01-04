/*
setTimeout()
setInterval()
clearTimeout()

When you have to execute code after a specified amount of time, you can use the two timer functions that JavaScript provides. The setTimeout() method executes a function after a prescribed amount of time, expressed in milliseconds, elapses. On the other hand, the setInterval() does the same thing but in a recurring fashion where a provided callback function will execute after a given amount of time. 
 
Once a timer is setup, it can be removed by using clearTimeout() and clearInterval() for setTimeout() and setInterval() respectively using the unique timer IDs that are issued when you invoke the timer functions in the first place.  

*/


let counter = 0;
let loopMe = setInterval(function () {
console.log(`Count: ${counter}`);
counter++;;
}, 1000);

setTimeout(function () {
clearInterval(loopMe);
counter = 0;
}, 10000);

console.log('Timers');

/*
Output:

'Timers'
'Count: 0'
'Count: 1'
'Count: 2'
'Count: 3'
'Count: 4'
'Count: 5'
'Count: 6'
'Count: 7'
'Count: 8'
'Count: 9'

*/


