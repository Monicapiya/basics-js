/*
Write a JavaScript program to sort a list of elements using Merge sort.

According to Wikipedia "Merge sort (also commonly spelled mergesort) is an O (n log n) comparison-based sorting algorithm. Most implementations produce a stable sort, which means that the implementation preserves the input order of equal elements in the sorted output."

Algorithm:

Conceptually, a merge sort works as follows :

Divide the unsorted list into n sublists, each containing 1 element (a list of 1 element is considered sorted).
Repeatedly merge sublists to produce new sorted sublists until there is only 1 sublist remaining. This will be the sorted list.

*/


function merge_sort(left_part, right_part) 
{
let i = 0;
let j = 0;
let results = [];
  
while(i < left_part.length || j < right_part.length) {
if(i  === left_part.length) {
results.push(right_part[j]);
j++;
} else if(j ===  right_part.length || left_part[i] <= right_part[j] ) {
results.push(left_part[i]);
i++;
} else {
results.push(right_part[j]);
j++;
}

}
return results;

};

console.log(merge_sort([1,3,4], [7,7,9]));

/*
Output:

[ 1, 3, 4, 7, 7, 9 ]

*/
