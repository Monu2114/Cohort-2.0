/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  // let n = str.length;
  // for (let i = 0; i < n / 2; i++) {
  //   if (str.charAt(i) != str.charAt(n - i - 1)) return false;
  // }
  // return true;
  // two pointer approach -
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    while (left < right && !isAlphaNumeric(str[left])) left++;
    while (left < right && !isAlphaNumeric(str[right])) right--;
    if (str[left].toLowerCase() !== str[right].toLowerCase()) return false;
    left++;
    right--;
  }
  return true;
}
function isAlphaNumeric(char) {
  return /^[a-z0-9]$/i.test(char); // matches a-z or 0-9, case-insensitive
}
module.exports = isPalindrome;
