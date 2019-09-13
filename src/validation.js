export {validateChessboard, validateNumericalSequence, validatePalindrome};

let validateChessboard = (width, height, symbol) => {
  return !isNaN(width)
    && !isNaN(height)
    && width > 0
    && height > 0
    && symbol.trim().length
    && symbol.length === 1;
}

let validateNumericalSequence = (n, m) => {
  return !isNaN(n)
    && !isNaN(m)
    && n > 0
    && m > 0;
}

let validatePalindrome = (num) => {
  const minVal = 10;
  return !isNaN(num) && num > minVal;
}