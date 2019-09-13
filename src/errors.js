export { chessboardError, 
  palindromeError, 
  numericalSequenceError,
};

let chessboardError = {status: 'Failed', reason: 'Incorrect input data. Please, pay attention on arguments rules: quantity - 3; height - number; width - number; symbol - non-empty single character string'};

let palindromeError = {status: 'Failed', reason: 'Incorrect input data. Please, pay attention on arguments rules: quantity - 1; type - number; value > 10'};
let numericalSequenceError = {status: 'Failed', reason: 'Incorrect input data. Please, pay attention on arguments rules: quantity - 2; n > 0; m > 0'};

// const errors = [
//   {
//     name: 'chessBoardError',
//     status: 'failed',
//     reason: 'Incorrect input data. Please, pay attention on arguments rules: quantity - 3; height - number; width - number; symbol - non-empty single character string'
//   },

// ]

// let {name: {status, reason} } = errors;
