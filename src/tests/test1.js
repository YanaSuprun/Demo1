import {showChessboard} from '../task1.js';
import {chessboardError} from '../errors.js';

export const test1 = () => {
  describe('Task 1. Chess board', () => {
    describe('Function execution', () => {
      it('Success. Height: 2, width: 2, symbol: "-" should return string with 2*2 board', () => {
        chai.assert.equal(showChessboard(2, 2, '-'), `- 
 -`);
      });

      it('Success. Height: 4, width: 8, symbol: "*" should return string with 4*8 board', () => {
        chai.assert.equal(showChessboard(4, 8, '*'), `* * * * 
 * * * *
* * * * 
 * * * *`);
      });

      it('Success. Height: 2, width: 7, symbol: "#" should return string with 2*7 board', () => {
        chai.assert.equal(showChessboard(2, 7, '#'), `# # # #
 # # # `);
      });
    })

    describe('Check invalid arguments', () => {
      it('Error. Non-numeric first and second arguments should return error', () => {
        chai.assert.deepEqual(showChessboard('a', 'b', '*'), chessboardError);
      });

      it('Error. Non-numeric second argument should return error', () => {
        chai.assert.deepEqual(showChessboard(5, 'b', '*'), chessboardError);
      });

      it('Error. Negative width/height argument should return error', () => {
        chai.assert.deepEqual(showChessboard(-5, 2, '*'), chessboardError);
      });

      it('Error. Missed arguments should return error', () => {
        chai.assert.deepEqual(showChessboard(), chessboardError);
      });

      it('Error. Empty string in 3rd argument should return error', () => {
        chai.assert.deepEqual(showChessboard(3, 4, ''), chessboardError);
      });

      it('Error. Only spaces in 3rd argument should return error', () => {
        chai.assert.deepEqual(showChessboard(3, 4, '    '), chessboardError);
      });
    });
  });
};
