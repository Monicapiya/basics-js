/*
The str.replace() and replaceAll() methods allow you to find and replace text with an alternate. Let’s build an isPalindrome() function which accepts a string, removes whitespace, special characters, sets characters to lowercase and then compare it with the reversed version of the same thing.
 
We’ll use replaceAll() to remove special characters and whitespace from the string. 

*/

const words = ['Civic:', 'Seltos', 'Car', 'Noon', 'Refer', 'Tenet', 'Design'];

const isPalindrome = (str) => {
    const strAProc = str
      .toLowerCase()
      .replaceAll(/\s/g, '')
      .replaceAll(/[:;'"!@#$%^&*]/g, '');
   
    const strBProc = str
      .toLowerCase()
      .replaceAll(/\s/g, '')
      .replaceAll(/[:;'"!@#$%^&*]/g, '')
      .split('')
      .reverse()
      .join('');
   
    return strAProc === strBProc;
  };

words.forEach((w) => {
  console.log(`${w} ${isPalindrome(w) ? 'is' : 'is not'} a palindrome`);
});


/*
Output:

Civic: is a palindrome
Seltos is not a palindrome
Car is not a palindrome
Noon is a palindrome
Refer is a palindrome
Tenet is a palindrome
Design is not a palindrome

*/

