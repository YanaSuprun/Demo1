import {showChessboard} from './src/task1.js';
import {checkEnvelopes} from './src/task2.js';
import {sortTriangles} from './src/task3.js';
import {getMaxPalindrome} from './src/task4.js';
import {getMaxLuckyTickets} from './src/task5.js';
import {getNumericalSequence} from './src/task6.js';
import {getFibonacci} from './src/task7.js';

import {chessboardError} from './src/errors.js';
import {envelopesError} from './src/errors.js';

import {validateChessboard} from './src/validation.js';
import {validateEnvelopes} from './src/validation.js';


const get = function getElement(id) {
  return document.getElementById(id);
}


// Task 1
const btnGetChessboard = get('btn-get-chessboard');
btnGetChessboard.addEventListener('click', chessboard);

function chessboard () {
  const height = get('height').value;
  const width = get('width').value;
  const symbol = get('symbol').value;
  const resultContainer = get('result-chessboard');

  if(validateChessboard(height,width,symbol)) {
    let success = showChessboard(height, width, symbol);
    resultContainer.value = `${success}`;
  } else {
    let error = chessboardError.reason;
    resultContainer.value = `${error}`;
  };
};

// Task 2
const btnCheckEnvelopes = get('btn-check-envelopes');
btnCheckEnvelopes.addEventListener('click', envelopes);

function envelopes () {
  const a = get('env1-width').value;
  const b = get('env1-height').value;
  const c = get('env2-width').value;
  const d = get('env1-height').value;
  const resultContainer = get('result-envelope');

  const valid = validateEnvelopes({a, b}, {c, d})

  if(valid) {
    let success = checkEnvelopes({a, b}, {c, d});
    resultContainer.innerHTML = `Result: ${success}`;
  } else {
    let error = envelopesError.reason;
    resultContainer.style.color="red";
    resultContainer.innerHTML = `${error}`;
  }
}

