import {getNumericalSequence} from '../task6.js';
import {numericalSequenceError} from '../errors.js';

export const test6 = () => {
  describe('Task 6. Numerical sequence', () => {
    describe('Function execution', () => {
      it('Success. Length(n): 7, min(m): 4 should return string: 2, 3, 4, 5, 6, 7, 8', () => {
        chai.assert.equal(getNumericalSequence(7, 4), '2, 3, 4, 5, 6, 7, 8');
      });

      it('Success. Length(n): 2, min(m): 8 should return string: 3, 4', () => {
        chai.assert.equal(getNumericalSequence(2, 8), '3, 4');
      });

      it('Success. Length(n): 3, min(m): 10 should return string: 4, 5, 6', () => {
        chai.assert.equal(getNumericalSequence(3, 10), '4, 5, 6');
      });
    });

    describe('Check invalid arguments', () => {
      it('Error. Negative arguments should return error', () => {
        chai.assert.equal(getNumericalSequence(-3, -2), numericalSequenceError);
      });

      it('Error. Non-numeric arguments should return error', () => {
        chai.assert.equal(getNumericalSequence('s', 'd'), numericalSequenceError);
      });

      it('Error. Less than two arguments should return error', () => {
        chai.assert.equal(getNumericalSequence(), numericalSequenceError);
      });

      it('Error. Missed arguments should return error', () => {
        chai.assert.equal(getNumericalSequence(), numericalSequenceError);
      });
    })
  });
};