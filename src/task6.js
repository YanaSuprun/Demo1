import {numericalSequenceError} from './errors.js';
import {validateNumericalSequence} from './validation.js';

export const getNumericalSequence = (n, min) => {
  const isValid = validateNumericalSequence(n, min);

  if(!isValid) {
    return numericalSequenceError;
  }

  let length = parseInt(n);
  let str = '';
  let start = Math.ceil(Math.sqrt(min));

  for(let i = 0; i < length; i += 1) {
    str += `${start}, `;
    start += 1;
  }

  return str.slice(0, -2);
};
