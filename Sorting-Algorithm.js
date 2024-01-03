/*
Write a JavaScript program to sort a list of elements using Quick sort.
Quick sort is a comparison sort, meaning that it can sort items of any type for which a "less-than" relation (formally, a total order) is defined.

*/

function quick_Sort(origArray) {
  if(origArray.length <= 1){
  return origArray;
  } else {
  let left = [];
  let right = [];
  let newArray = [];
  let pivot = origArray.pop();
  let length = origArray.length;
  
  for(let i = 0; i < length; i++){
  if(origArray[i] <= pivot) {
  left.push(origArray[i]);
  } else{right.push(origArray[i]);
        }
  }
  
  return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
  }
  
  }
  
  let myArray = [-45,-70, 10, 80, 55, 99];
  
  console.log("Original array: " + myArray);
  
  let sortedArray = quick_Sort(myArray);
  console.log("Sorted array: " + sortedArray);
  
  /*
Output:

'Original array: -45,-70,10,80,55,99,88'
'Sorted array: -70,-45,10,55,80,88,99'

*/
