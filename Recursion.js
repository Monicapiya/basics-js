/*
Write a JavaScript program to calculate the factorial of a number.

In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example, 5! = 5 x 4 x 3 x 2 x 1 = 120

*/

function factorial(x) {
  if(x === 0) {
  return 1;
  } else {
  return x * factorial(x - 1);
  }
  }
  
  console.log(factorial(5));

  
  // Write a JavaScript program to find the greatest common divisor (GCD) of two positive numbers using recursion.

  let gcd = function(a, b) {
    if(!b) {
    return a;
    } else {
    return gcd(b, a % b);
    }
    }
    
    
    console.log(gcd(5, 9));

    /*
Write a JavaScript program to get integers in the range (x, y) using recursion.

Example : range(2, 9)
Expected Output : [3, 4, 5, 6, 7, 8]

*/

let range = function(start_num, end_num) {
  if (end_num - start_num === 2)
  {
  return [start_num + 1];
  } else {
  let list = range(start_num, end_num -1);
  list.push(end_num - 1);
  return list;
  }
  };
  
  console.log(range(2, 9));


  /*
Write a JavaScript program to compute the sum of an array of integers.

Example : var array = [1, 2, 3, 4, 5, 6]
Expected Output : 21

*/

let array_sum = function(my_array) {
  if (my_array.length === 1)
  {
  return my_array[0];
  } else {
  return my_array.pop() + array_sum(my_array);
  }
  };
  
  console.log(array_sum([1,2,3,4,5,6]));
  

    
