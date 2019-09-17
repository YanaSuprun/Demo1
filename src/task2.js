import {envelopesError} from './errors.js';
import {validateEnvelopes} from './validation.js';

export const checkEnvelopes = ({a, b}, {c, d},) => {
  const isValid = validateEnvelopes({a, b}, {c, d},);

  if(!isValid) {
    return envelopesError;
  }

  const carverCounting = (a,b,p,q) => {
    const count = b > (2 * p * q * a + (p ** 2 - q ** 2) * Math.sqrt(p ** 2 + q ** 2 - a ** 2)) / (p ** 2 + q ** 2);
    const condition = (p < a && q < b) || (p > a && (count));
    return condition;
  }

  if(carverCounting(a, b, c, d)) {
    return 1;
  } else {
    [a, c] = [c, a];
    [b, d] = [d, b];
    if (carverCounting(a, b, c, d)) {
      return 2
    }
    return 0
  }
};
