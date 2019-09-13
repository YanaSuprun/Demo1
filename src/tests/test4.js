import {getMaxPalindrome} from '../task4.js';
import {palindromeError} from '../errors.js';

export const test4 = () => {
  describe('Task 4. Palindrome', () => {
    describe('Function execution', () => {
      it('Success. Num: 123321 should return string: 123321', () => {
        chai.assert.equal(getMaxPalindrome(123321), '123321');
      });

      it('Success. Num: 22123321 should return string: 123321', () => {
        chai.assert.equal(getMaxPalindrome(22123321), '123321');
      });

      it('Success. Num: 1223344 should return string with first max-length palindrome: 22', () => {
        chai.assert.equal(getMaxPalindrome(1223344), '22');
      });

      it('Success. Num: 122334444444444777 should return string with first max-length palindrome: 4444444444', () => {
        chai.assert.equal(getMaxPalindrome(122334444444444777), '4444444444');
      });
    });

    describe('Check invalid arguments', () => {
      it('Success. Num as string \'8877756465\' should return string: 777', () => {
        chai.assert.equal(getMaxPalindrome(122334444444444777), '4444444444');
      });

      it('Error. Non-numeric argument should return error', () => {
        chai.assert.equal(getMaxPalindrome(-3334567), palindromeError);
      });

      it('Error. Call without argument should return error', () => {
        chai.assert.equal(getMaxPalindrome(), palindromeError);
      });

      it('Error. Empty string argument should return error', () => {
        chai.assert.equal(getMaxPalindrome(''), palindromeError);
      });

      it('Error. Num: 8 (less than 10) should return error', () => {
        chai.assert.equal(getMaxPalindrome(8), palindromeError);
      });

      it('Error. Mixed numbers and letters argument should return error', () => {
        chai.assert.equal(getMaxPalindrome('8888fghd'), palindromeError);
      });
    });
  });
};