const isPalindrome = (word) => {
  let wordArr = [];
  let revWord = [];
  for (const w of word) {
  wordArr.push(w);
  revWord.push(w);
  }
  return wordArr.toString() === revWord.reverse().toString();
  };
  
  console.log(isPalindrome('crisp') ? 'Is a palindrome!' : 'Not a palindrome...');

  /*
   Reverse Method

REverse is a mutor method

It modifies the original array 

order of elements is reversed without affecting the order of indexing
  */