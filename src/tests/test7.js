import {getFibonacci} from '../task7.js';
import {fibonacciError} from '../errors.js';

export const test7 = () => {
  describe('Task 7. Fibonacci', () => {
    describe('Function execution with length argument', () => {
      it('Success. Length: 4 should return array: [ 1597, 2584, 4181, 6765 ]', () => {
        chai.assert.deepEqual(getFibonacci({length: 4,}), [ 1597, 2584, 4181, 6765 ]);
      });

      it('Success. Length: 20 should return array: [ 12200160415121877000, 19740274219868226000, 31940434634990100000, 51680708854858330000, 83621143489848430000 ]', () => {
        chai.assert.deepEqual(getFibonacci({length: 20,}), [ 12200160415121877000, 19740274219868226000, 31940434634990100000, 51680708854858330000, 83621143489848430000 ]);
      });

      it('Error. Length: 21 should return error', () => {
        chai.assert.deepEqual(getFibonacci({length: 21,}), fibonacciError);
      });

      it('Error. Length: 0 should return error', () => {
        chai.assert.deepEqual(getFibonacci({length: 0,}), fibonacciError);
      });

      it('Error. Length: "12a" should return error', () => {
        chai.assert.deepEqual(getFibonacci({length: '12a',}), fibonacciError);
      });
    });

    describe('Function execution with range arguments', () => {
      it('Success. Min: 0, max: 100 should return array: [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 ]', () => {
        chai.assert.deepEqual(getFibonacci({min: 0, max: 100}), [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 ]);
      });

      it('Success. Min: 8, max: 35 should return array: [ 8, 13, 21, 34 ]', () => {
        chai.assert.deepEqual(getFibonacci({min: 8, max: 35}), [ 8, 13, 21, 34 ]);
      });

      it('Success. Min: 8, max: 35 should return array: [ 8, 13, 21, 34 ]', () => {
        chai.assert.deepEqual(getFibonacci({min: 8, max: 35}), [ 8, 13, 21, 34 ]);
      });

      it('Error. Min: -8, max: 35 should return error', () => {
        chai.assert.deepEqual(getFibonacci({min: -8, max: 35}), fibonacciError);
      });

      it('Error. Min: 35, max: 35 should return error', () => {
        chai.assert.deepEqual(getFibonacci({min: 35, max: 35}), fibonacciError);
      });
    });
  });
};
