export { chessboardError,
  envelopesError,
  trianglesError,
  luckyTicketsError,
  palindromeError,
  numericalSequenceError,
  fibonacciError,
};

let chessboardError = {status: 'Failed', reason: 'Incorrect input data. Please, pay attention on arguments rules: quantity - 3; height - number; width - number; symbol - non-empty single character'};
let envelopesError = {status: 'Failed', reason: 'Incorrect input data. Please, pay attention on arguments rules: it should be 2 objects(2 rectangles) with props: width and height for each, width/height > 0'}
let trianglesError = {status: 'Failed', reason: 'Incorrect input data. Please, pay attention on arguments rules: min triangle quantity - 2; each triangle should exist(summ of 2 side > 3rd side); all sides - positive numbers'};
let palindromeError = {status: 'Failed', reason: 'Incorrect input data. Please, pay attention on arguments rules: quantity - 1; type - number; value > 10'};
let luckyTicketsError = { status: 'Failed', reason: 'Incorrect input data. Please, pay attention on arguments. Rules: it shoul be object with props min and max; max > min' }
let numericalSequenceError = {status: 'Failed', reason: 'Incorrect input data. Please, pay attention on arguments rules: quantity - 2; n > 0; m > 0'};
let fibonacciError = {status: 'Failed', reason: 'Incorrect input data. Please, pay attention on arguments rules: you should input length of fibonacci number(> 0 and <= 20) or min/max range, where min/max > 0 and max > min'};

// const errors = [
//   {
//     name: 'chessBoardError',
//     status: 'failed',
//     reason: 'Incorrect input data. Please, pay attention on arguments rules: quantity - 3; height - number; width - number; symbol - non-empty single character string'
//   },

// ]

// let {name: {status, reason} } = errors;
