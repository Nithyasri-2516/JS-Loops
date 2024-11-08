
// patterns:

// [abc]	Find any of the characters inside the brackets
// [^abc]	Find any character, not inside the brackets
// [0-9]	Find any of the digits between the brackets 0 to 9
// [^0-9]	Find any digit not in between the brackets
// (x | y)	Find any of the alternatives between x or y separated with |

const regex = /\(\d{3}\) \d{3}-\d{4}/; 
const str = "(123) 456-7890";
console.log(regex.test(str));  // true


