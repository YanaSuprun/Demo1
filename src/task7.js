import {validateFibonacci} from './validation.js';
import {fibonacciError} from './errors.js';

export function getFibonacci(context) {
  let isValid = (validateFibonacci(context));

  if (!isValid) {
    return fibonacciError;
  };

  let fibonaciFromMinToMax = (context) => {
    const {min, max} = context;
    const fibArr = [0, 1];
    let fibNum = 0;

    for (let i = 0; fibNum <= max; i += 1) {
      if (i >= 2) {
        let curIndex = fibArr.length - 1;
        let prevIndex = fibArr.length - 2;
          fibArr.push(fibArr[curIndex] + fibArr[prevIndex]);
          fibNum = fibArr[curIndex];
      } else fibNum = fibArr[i];
    };

    return fibArr.filter(elem => elem >= min && elem <= max);
  };

  let fibonaciNumLength = (context) => {
    const {length} = context;
    const fibArr = [0,1];
    let fibNum = 0;
  
    for (let i = 0; fibNum.toString().length <= length; i += 1) {
      if (i >= 2) {
        let curIndex = fibArr.length - 1;
        let prevIndex = fibArr.length - 2;
        fibArr.push(fibArr[curIndex] + fibArr[prevIndex]);
        fibNum = fibArr[curIndex];
      } else fibNum = fibArr[i];
    };

    return fibArr.filter(elem => elem.toString().length === length);
  };

  if (context.hasOwnProperty('length')) {
    return fibonaciNumLength(context);
  };

  if (context.hasOwnProperty('min')) {
    return fibonaciFromMinToMax(context);
  };
};
