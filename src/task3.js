import {validateTriangles} from './validation.js';
import {trianglesError} from './errors.js';

export const sortTriangles = (arr = [...{vertices, a, b, c}],) => {
  let isValid = (validateTriangles(arr,));

  if (!isValid) {
    return trianglesError;
  };
  // Geron's formula
  let  getAreaGeron = (elem) => {
    let p = 0.5 * (elem.a + elem.b + elem.c);
    let square = Math.sqrt(p * (p - elem.a)*(p - elem.b)*(p - elem.c));

    return square;
  };
  // Get arreas
  let getArea = arr.map((elem) => {
    let areaVal = getAreaGeron(elem);

    return {...elem, arrea: areaVal};
  });
  // Sort and get array of vertices
  return getArea.sort((elem1, elem2) => elem2.arrea - elem1.arrea).map(elem => elem.vertices);
};
