/*
It is quite easy for one part of your application to overwrite the contents of an object that was created or stored elsewhere in your application. Data that must not be mutated must be secured, which is why we have the Object.seal() and Object.freeze() methods. Out of these, we’ll see the impact of the Object.freeze() method in this simple exercise.
 
If you observe the output of the exercise and compare it with the contents of the main.js file, you’ll see our book object has been overwritten maliciously and a function has been injected in and executed. All content is now lost.
 
This object has been hacked!

The key thing to observe after the Object.freeze() is that our object is intact, no properties were mutated, and no new properties were entertained. This is critical when working with object-based data that must be preserved.

Syntax for try and catch 
JS
Copy to Clipboard
try {
  tryStatements
} catch (exceptionVar) {
  catchStatements
} finally {
  finallyStatements
}

*/

const book = {
  isbn: '0-671-00410-7',
  title: 'Contact',
  author: 'Carl Sagan',
  publisher: 'Pocket Books',
};

Object.freeze(book);

  
try {
    book.isbn = null;
    book.title = null;
    book.author = null;
    book.publisher = 'Hacked';
    book.intro = function () {
      console.log('This object has been hacked!');
    };

console.log(book.intro());
} 

catch (e) {
  console.log(e.message);
} 

finally {
  console.log(book);
}

/*
Output:

Cannot assign to read only property 'isbn' of object '#<Object>'
{
  isbn: '0-671-00410-7',
  title: 'Contact',
  author: 'Carl Sagan',
  publisher: 'Pocket Books'
}


*/

