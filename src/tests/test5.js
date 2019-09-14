import {getMaxLuckyTickets} from '../task5.js';
import {luckyTicketsError} from '../errors.js';


export const test5 = () => {
  describe('Task 5. Lucky tickets', () => {
    describe('Function execution', () => {
      it('Success. { min: 000000, max: 999999 } should return object: { name: "Complicated Counter", happyQuantity: 55251 }', () => {
        chai.assert.deepEqual(getMaxLuckyTickets({ min: '000000', max: '999999' }), { name: "Complicated Counter", happyQuantity: 55251 });
      });

      it('Success. { min: 000125, max: 125000 } should return object: { name: "Complicated Counter", happyQuantity: 6463 }', () => {
        chai.assert.deepEqual(getMaxLuckyTickets({ min: '000125', max: '125000' }), { name: "Complicated Counter", happyQuantity: 6463 });
      });

      it('Success. { min: 111111, max: 222222 } should return object: { name: "Complicated Counter", happyQuantity: 5985 }', () => {
        chai.assert.deepEqual(getMaxLuckyTickets({ min: '111111', max: '222222' }), { name: "Complicated Counter", happyQuantity: 5985 });
      });
    });

    describe('Check invalid arguments', () => {
      it('Error. { min: -111111, max: 222222 } should return error', () => {
        chai.assert.deepEqual(getMaxLuckyTickets({ min: '-111111', max: '222222' }), luckyTicketsError);
      });

      it('Error. { min: 1111, max: 222222 } should return error', () => {
        chai.assert.deepEqual(getMaxLuckyTickets({ min: '1111', max: '222222' }), luckyTicketsError);
      });

      it('Error. { min: 111a1a, max: 888888 } should return error', () => {
        chai.assert.deepEqual(getMaxLuckyTickets({ min: '111a1a', max: '888888' }), luckyTicketsError);
      });

      it('Error. The only one prop { min: 111111 } should return error', () => {
        chai.assert.deepEqual(getMaxLuckyTickets({ min: '111111' }), luckyTicketsError);
      });

      it('Error. Without argument should return error', () => {
        chai.assert.deepEqual(getMaxLuckyTickets(), luckyTicketsError);
      });

      it('Error. The same value in min and max { min: 252525, max: 252525 } should return error', () => {
        chai.assert.deepEqual(getMaxLuckyTickets({ min: '252525', max: '252525' }), luckyTicketsError);
      });

    });
  });
};