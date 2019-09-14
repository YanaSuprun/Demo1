export {
  validateChessboard,
  // validateTriangles,
  validateLuckyTickets,
  validatePalindrome,
  validateNumericalSequence,
  validateFibonacci,
};

let validateChessboard = (width, height, symbol,) => {
  return !isNaN(width)
    && !isNaN(height)
    && width > 0
    && height > 0
    && symbol.trim().length
    && symbol.length === 1;
};

// let validateTriangles = (arr) => {
//   arr.map((elem) => {
//     let res =[];
//     for(let key in elem) {
//       if(!isNaN(elem[key])) {
//         res.push(elem[key])
//       }
//     }
//     console.log(res);
//     return (res[0]<res[1]+res[2] && res[1]<res[0]+res[2] && res[2]<res[0]+res[1])
//       // console.log('ok')
    
//   });
// };

let validateNumericalSequence = (n, m,) => {
  return !isNaN(n)
    && !isNaN(m)
    && n > 0
    && m > 0;
};

let validatePalindrome = (num,) => {
  const minVal = 10;
  return !isNaN(num) && num > minVal;
};

let validateLuckyTickets = (context,) => {
  return context.hasOwnProperty('min')
    && context.hasOwnProperty('max')
    && context.min.length === 6
    && context.max.length === 6
    && !isNaN(context.min)
    && !isNaN(context.max)
    && context.min >= 0
    && context.max >= 0
    && context.max > context.min;
};

let validateFibonacci = (context,) => {
  return (context.hasOwnProperty('length')
      && !isNaN(context.length)
      && context.length > 0
      && context.length <= 20
    )
    || (context.hasOwnProperty('min')
      && context.hasOwnProperty('max')
      && !isNaN(context.min)
      && !isNaN(context.max)
      && context.min >= 0
      && context.max > 0
      && context.max > context.min
    );
};
