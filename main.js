import {showChessboard} from './src/task1.js';
import {checkEnvelopes} from './src/task2.js';
import {sortTriangles} from './src/task3.js';
import {getMaxPalindrome} from './src/task4.js';
import {getMaxLuckyTickets} from './src/task5.js';
import {getNumericalSequence} from './src/task6.js';
import {getFibonacci} from './src/task7.js';

// Function which simlyfied get elements from DOM
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

  // Run function
  const result = showChessboard(height, width, symbol);

  // Result to DOM
  if(result.reason) {
    resultContainer.value = `${result.reason}`;
  } else {
    resultContainer.value = `${result}`;
  }
};

// Task 2
get('btn-check-envelopes').addEventListener('click', envelopes);

function envelopes () {
  // Get DOM element values and result container
  const a = get('env1-width').value;
  const b = get('env1-height').value;
  const c = get('env2-width').value;
  const d = get('env2-height').value;
  const resultContainer = get('result-envelope');

  // Run function
  const result = checkEnvelopes({a, b}, {c, d});

  // Result to DOM
  if(result.reason) {
    resultContainer.style.color="red";
    resultContainer.innerHTML = `${result.reason}`;
  } else {
    resultContainer.style.color="green";
    resultContainer.innerHTML  = `Result: ${result}`;
  };
};

// Task 3
get('btn-triangles').addEventListener('click', triangles);

function triangles () {
  // Get elements from DOM and convert them into needed data fo function
  const resultContainer = get('result-triangles');
  const trianglesArray = [...document.getElementsByClassName('triangle')];

  const arrayOfObj = [];

  trianglesArray.forEach((item) => {
    let triangleObj = {};

    triangleObj.vertices = item.getElementsByClassName('vertices')[0].value;
    triangleObj[triangleObj.vertices[0].toLowerCase()] = Number(item.getElementsByClassName('side1')[0].value);
    triangleObj[triangleObj.vertices[1].toLowerCase()] = Number(item.getElementsByClassName('side2')[0].value);
    triangleObj[triangleObj.vertices[2].toLowerCase()] = Number(item.getElementsByClassName('side3')[0].value);
    
    arrayOfObj.push(triangleObj);
  });

  // Run function
  const result = sortTriangles(arrayOfObj);

  // Result to DOM
  if(result.reason) {
    resultContainer.style.color="red";
    resultContainer.innerHTML = `${result.reason}`;
  } else {
    resultContainer.style.color="green";
    resultContainer.innerHTML  = `Result: ${result}`;
  };
};

// Task 4
get('btn-palindrome').addEventListener('click', palindrome);

function palindrome () {
  // Get DOM elements and values
  const num = get('number').value;
  const resultContainer = get('result-palindrome');

  // Run function
  const result = getMaxPalindrome(num);

  // Result to DOM
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
  // Get DOM elements and values
  const min = get('min').value;
  const max = get('max').value;
  const resultContainer = get('result-tickets');

  // Run function
  const res = getMaxLuckyTickets({min, max});

  // Result to DOM
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
  // Get DOM elements and values
  const n = get('num-n').value;
  const m = get('num-m').value;
  const resultContainer = get('result-sequence');

  // Run function
  const result = getNumericalSequence(n, m);

  // Result to DOM
  if(result.reason) {
    resultContainer.style.color="red";
    resultContainer.innerHTML = `${result.reason}`;
  } else {
    resultContainer.style.color="green";
    resultContainer.innerHTML  = `Result: ${result}`;
  };
};

// Task 7
// Execution for length
get('btn-fib-length').addEventListener('click', fibonacci1);
function fibonacci1() {
  // Get DOM value
  let data = {
    length: document.getElementById('fib-length').value,
  };

  // Get container for result
  const resultContainer = get('result-fibonacci');

  // Run function
  const result = getFibonacci(data);

  // Result to DOM
  if(result.reason) {
    resultContainer.style.color="red";
    resultContainer.innerHTML = `${result.reason}`;
  } else {
    resultContainer.style.color="green";
    resultContainer.innerHTML  = `Result for length: ${result}`;
  };
};

// Execution for range
get('btn-fib-min-max').addEventListener('click', fibonacci2);
function fibonacci2() {
  // Get DOM value
  let data = {
    min: document.getElementById('fib-min').value,
    max: document.getElementById('fib-max').value,
  };

  // Get container for result
  const resultContainer = get('result-fibonacci');

  // Run function
  const result = getFibonacci(data);

  // Result to DOM
  if(result.reason) {
    resultContainer.style.color="red";
    resultContainer.innerHTML = `${result.reason}`;
  } else {
    resultContainer.style.color="green";
    resultContainer.innerHTML  = `Result for range: ${result}`;
  };
};


