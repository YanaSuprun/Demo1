import {validatePalindrome} from './validation.js';
import {palindromeError} from './errors.js';

export const getMaxPalindrome = (num) => {
  const isValid = validatePalindrome(num);

  if(!isValid) {
    return palindromeError;
  }

  let str = num.toString();
  let maxLength = 0;
  let maxPalindrome = '';
  let strLength = str.length;

  const isPalindrome = (str) => {
    let reverseStr = str.split('').reverse().join('');
    return str === reverseStr;
  }

  for(let i = 0; i < strLength; i++) {
    let subs = str.substr(i, str.length);
    let subsLength = subs.length;

    for(let j = subsLength; j >= 0; j--) {
      let subs2 = subs.substr(0, j);
      let subs2Length = subs2.length;
      if (subs2Length <= 1)
      continue;

      if (isPalindrome(subs2)) {
        if (subs2Length > maxLength) {
          maxLength = subs2Length;
          maxPalindrome = subs2;
        }
      }
    }
  }

  return maxPalindrome ? maxPalindrome : 0;
};
