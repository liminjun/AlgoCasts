// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
//   var newStr = str.split("");
//   let total = 0;
//   for (var i = 0; i < newStr.length; i++) {
//     if (
//       newStr[i].toLowerCase() === "a" ||
//       newStr[i].toLowerCase() === "e" ||
//       newStr[i].toLowerCase() === "i" ||
//       newStr[i].toLowerCase() === "o" ||
//       newStr[i].toLowerCase() === "u"
//     ) {
//       total += 1;
//     }
//   }
//   return total;
// }
// function vowels(str) {
//   let count = 0;
//   const checker = "aeiou";

//   for (let char of str.toLowerCase()) {
//     if (checker.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }

function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}
module.exports = vowels;
