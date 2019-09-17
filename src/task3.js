import {validateTriangles} from './validation.js';
import {trianglesError} from './errors.js';

export const sortTriangles = (arr) => {
  const isValid = validateTriangles(arr);

  if(!isValid) {
    return trianglesError;
  }

  arr.forEach((object) => {
    // Get sides
    let triangleVertices = object.vertices.toLowerCase().split('');
    let side1 = object[triangleVertices[0]];
    let side2 = object[triangleVertices[1]];
    let side3 = object[triangleVertices[2]];

    console.log(side1,side2, side3);

    // Add area using Geron's formula
    object.area = getAreaGeron(side1, side2, side3);
    console.log(object.area);
  });

  return arr.sort((object1, object2) => object2.area - object1.area).map(object => object.vertices);
};

// Geron's formula
function  getAreaGeron(a, b, c) {
  let p = 0.5 * (a + b + c);
  let square = Math.sqrt(p * (p - a)*(p - b)*(p - c));

  return square;
};

// console.log(sortTriangles([{ vertices: 'DEF', d: 10, e: 20, f: 22.36 }, {vertices: 'ABC', a: 9.2, b: 5, c: 7}, {vertices: 'LMN', l: 6.5, m: 4.4, n: 7.5}]))
