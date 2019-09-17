export {
  validateChessboard,
  validateEnvelopes,
  validateTriangles,
  validateLuckyTickets,
  validatePalindrome,
  validateNumericalSequence,
  validateFibonacci,
};

let validateChessboard = (width, height, symbol,) => {
  return !isNaN(width)
    && !isNaN(height)
    && width > 0
    && width <= 50
    && height > 0
    && height <= 50
    && symbol.trim().length
    && symbol.length === 1;
};

let validateEnvelopes = ({a, b}, {c, d},) => {
  return !isNaN(a)
    && !isNaN(b)
    && !isNaN(c)
    && !isNaN(d)
    && a > 0
    && b > 0
    && c > 0
    && d > 0;
};

let validateTriangles = (array) => {
  console.log(array.vertices)
  return array.hasOwnProperty('vertices')
    && toString(array.vertices).length == 3
  // array.map((object) => {
  //   // Get sides
  //   let triangleVertices = object.vertices.toLowerCase().split('');
  //   let side1 = object[triangleVertices[0]];
  //   let side2 = object[triangleVertices[1]];
  //   let side3 = object[triangleVertices[2]];

  //   if(side1 > 0) {
  //     return true;
  //   }
  // });

};

// console.log(validateTriangles([{ vertices: 'DEF', d: 10, e: 20, f: 22.36 }, {vertices: 'ABC', a: 9.2, b: 5, c: 7}, {vertices: 'LMN', l: 6.5, m: 4.4, n: 7.5}]))

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
