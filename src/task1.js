import {chessboardError} from './errors.js';
import {validateChessboard} from './validation.js';


export const showChessboard = (height, width, symbol,) => {
  const isValid = validateChessboard(height, width, symbol,);

  if(!isValid) {
    return chessboardError;
  }

  let field = '';
  for(let i = 0; i < height; i+=1) {
    for(let j = 0; j < width; j+=1) {
      field += (i + j) % 2 ? ' ' : symbol;
    }
    field += '\n';
  }

  return field.slice(0, -1);
};
