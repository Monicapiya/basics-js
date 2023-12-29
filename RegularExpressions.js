/*
Defining and processing text based on patterns is needed quite frequently in modern web applications. Pattern matching enables developers to incorporate faux intelligence in apps as they’re able to recognize portions of text and extracts data automatically. 
 
Without relying on artificial intelligence or natural language processing, developers can implement pattern matching and data extraction using regular expressions, a language agnostic syntax that allows developers to describe patterns in text using tokens, quantifiers and other pieces of the syntax.
 
JavaScript enables you to work with RegEx using a number of methods, such as exec(), test(), search(), match() and matchAll(). In this exercise, we’ll work with the match() method to extract hashtags from a post. This is something that you will use if you’re building a social media application that accepts hashtags as a way of defining keywords to tag the post which enables easy categorization of content.

*/


const post =
  'This waffle is brilliant! #foodie #waffles #instafood #nutella #chocolate #hazelnut #icecream';

const getTags = (post) => {
    const pattern = /(?<=#)\w+/gi;
  const detectTags = post.match(pattern);
  return detectTags && detectTags.length > 1 ? detectTags : detectTags[0]; 
};

console.log(getTags(post));

/*
[
  'foodie',
  'waffles',
  'instafood',
  'nutella',
  'chocolate',
  'hazelnut',
  'icecream'
]


*/



