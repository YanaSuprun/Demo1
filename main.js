import {showChessboard} from './src/task1.js';
import {checkEnvelopes} from './src/task2.js';
import {sortTriangles} from './src/task3.js';
import {getMaxPalindrome} from './src/task4.js';
import {getMaxLuckyTickets} from './src/task5.js';
import {getNumericalSequence} from './src/task6.js';
import {getFibonacci} from './src/task7.js';


const get = function getElement(id) {
  return document.getElementById(id);
}

// Task 1
get('btn-get-chessboard').addEventListener('click', chessboard);

function chessboard () {
  const height = get('height').value;
  const width = get('width').value;
  const symbol = get('symbol').value;
  const resultContainer = get('result-chessboard');

  const result = showChessboard(height, width, symbol);
  if(result.reason) {
    resultContainer.value = `${result.reason}`;
  } else {
    resultContainer.value = `${result}`;
  }
};

// Task 2
// Something goes wrong in ui
get('btn-check-envelopes').addEventListener('click', envelopes);

function envelopes () {
  const a = get('env1-width').value;
  const b = get('env1-height').value;
  const c = get('env2-width').value;
  const d = get('env1-height').value;
  const resultContainer = get('result-envelope');

  const result = checkEnvelopes({a, b}, {c, d});

  if(result.reason) {
    resultContainer.style.color="red";
    resultContainer.innerHTML = `${result.reason}`;
  } else {
    resultContainer.style.color="green";
    resultContainer.innerHTML  = `Result: ${result}`;
  };
};

// Task 3
// get('btn-triangles').addEventListener('click', triangles);

// function triangles () {
//   const a = get('env1-width').value;
//   const b = get('env1-height').value;
//   const c = get('env2-width').value;
//   const d = get('env1-height').value;
//   const resultContainer = get('result-envelope');

//   const result = checkEnvelopes({a, b}, {c, d});

//   if(result.reason) {
//     resultContainer.style.color="red";
//     resultContainer.innerHTML = `${result.reason}`;
//   } else {
//     resultContainer.style.color="green";
//     resultContainer.innerHTML  = `Result: ${result}`;
//   };
// };

// Task 4
get('btn-palindrome').addEventListener('click', palindrome);

function palindrome () {
  const num = get('number').value;
  const resultContainer = get('result-palindrome');

  const result = getMaxPalindrome(num);

  if(result.reason) {
    resultContainer.style.color="red";
    resultContainer.innerHTML = `${result.reason}`;
  } else {
    resultContainer.style.color="green";
    resultContainer.innerHTML  = `Result: ${result}`;
  };
};

// Task 5
get('btn-tickets').addEventListener('click', luckyTickets);

function luckyTickets () {
  const min = get('min').value;
  const max = get('max').value;
  const resultContainer = get('result-tickets');

  const res = getMaxLuckyTickets({min, max});

  if(res.reason) {
    resultContainer.style.color="red";
    resultContainer.innerHTML = `${res.reason}`;
  } else {
    resultContainer.style.color="green";
    resultContainer.innerHTML  = `Winner: ${res.winner}, sipmle: ${res.simple}, complicated: ${res.complicate}`;
  };
};

// Task 6
get('btn-sequence').addEventListener('click', sequence);

function sequence () {
  const n = get('num-n').value;
  const m = get('num-m').value;
  const resultContainer = get('result-sequence');

  const result = getNumericalSequence(n, m);

  if(result.reason) {
    resultContainer.style.color="red";
    resultContainer.innerHTML = `${result.reason}`;
  } else {
    resultContainer.style.color="green";
    resultContainer.innerHTML  = `Result: ${result}`;
  };
};

// Task 7
// Not finished, needed to change logic in main function 
// get('btn-fib-length').addEventListener('click', fibonacci);

// function fibonacci () {
//   const length = get('fib-length').value;
//   const min = get('fib-min').value;
//   const max = get('fib-max').value;

//   const result1Container = get('result1-fibonacci');
//   const result2Container = get('result2-fibonacci');

//   const result = getFibonacci({length, min, max });

//   if(result.reason) {
//     result1Container.style.color="red";
//     result1Container.innerHTML = `${result1.reason}`;
//   } else {
//     result1Container.style.color="green";
//     result1Container.innerHTML  = `Result: ${result1}`;
//   };

//   const result2 = getFibonacci
// };

