import {validateLuckyTickets} from './validation.js';
import {luckyTicketsError} from './errors.js';

export const getMaxLuckyTickets = (obj = {},) => {
  const isValid = validateLuckyTickets(obj);
  if(!isValid) {
    return luckyTicketsError;
  };

  const {min, max} = obj;
  let start = Number(min);
  const length = Number(max) - start;
  const result = {};
  let simpleCounter = 0;
  let complicatCounter = 0;

  const simple = (arr) => {
    const half = 3;
    let sum1 = 0;
    let sum2 = 0;
  
    arr.forEach((elem, index) => {
      index < half ? sum1 += elem : sum2 += elem;
    });

    return sum1 === sum2 ? ++simpleCounter : simpleCounter;
  };

  const complicated = (arr) => {
    let sum1 = 0;
    let sum2 = 0;
  
    arr.forEach((elem, index) => {
      index % 2 === 0 ? sum2 += elem : sum1 += elem;
    });

    return sum1 === sum2 ? ++complicatCounter : complicatCounter;
  }

  for(let i = 0; i < length; i += 1) {
    const arr = start.toString().split('').map(elem => Number(elem));
    start +=1;
    simple(arr);
    complicated(arr);
  }

  if (simpleCounter > complicatCounter) {
    result.name = 'Simple Counter';
    result. happyQuantity = simpleCounter;
  } else if (simpleCounter < complicatCounter) {
    result.name = 'Complicated Counter';
    result.happyQuantity = complicatCounter;
  } else {
    result.name = 'No winner';
  };

  return result;
};
