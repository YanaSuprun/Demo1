import {checkEnvelopes} from '../task2.js';
import {envelopesError} from '../errors.js';

export const test2 = () => {
  describe('Task 2. Envelopes', () => {
    describe('Function execution', () => {
      it('Success. {a: 4, b: 4}, {c: 2, d: 2} should return 1', () => {
        chai.assert.equal(checkEnvelopes({a: 4, b: 4}, {c: 2, d: 2}), 1);
      });

      it('Success. {a: 2, b: 2}, {c: 4, d: 4} should return 2', () => {
        chai.assert.equal(checkEnvelopes({a: 2, b: 2}, {c: 4, d: 4}), 2);
      });

      it('Success. {a: 10, b: 5}, {c: 11, d: 1} should return 0', () => {
        chai.assert.equal(checkEnvelopes({a: 10, b: 5}, {c: 11, d: 1}), 0)
      });

      it('Success. {a: 10, b: 5}, {c: 11, d: 0.2} should return 1', () => {
        chai.assert.equal(checkEnvelopes({a: 10, b: 5}, {c: 11, d: 0.2}), 1)
      });

      it('Success. {a: 10, b: 5}, {c: 11, d: 0.3} should return 0', () => {
        chai.assert.equal(checkEnvelopes({a: 10, b: 5}, {c: 11, d: 0.3}), 0)
      });
    });

    describe('Check invalid arguments', () => {
      it('Error. {a: -4, b: 4}, {c: 2, d: 2} should return error', () => {
        chai.assert.equal(checkEnvelopes({a: -4, b: 4}, {c: 2, d: 2}), envelopesError);
      });

      it('Error. {a: "f", b: 4}, {c: 2, d: 2} should return error', () => {
        chai.assert.equal(checkEnvelopes({a: "f", b: 4}, {c: 2, d: 2}), envelopesError);
      });

      it('Error. {a: 4, b: 4}, {c: 2f, d: 2} should return error', () => {
        chai.assert.equal(checkEnvelopes({a: 4, b: 4}, {c: "2f", d: 2}), envelopesError);
      });

      it('Error. Only first envelope arguments {a: "4", b: 4}, {} should return error', () => {
        chai.assert.equal(checkEnvelopes({a: 4, b: 4}, {}), envelopesError);
      });
    });
  });
};