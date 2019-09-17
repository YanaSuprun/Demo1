import {sortTriangles} from '../task3.js';
import {trianglesError} from '../errors.js';

export const test3 = () => {
  describe('Task 3. Triangles', () => {
    describe('Function execution', () => {
      it('Success. sortTriangles([{ vertices: \'ABC\', a: 10, b: 20, c: 22.36 }, {vertices: \'DEF\', d: 10, e: 20, f: 12.36}])', () => {
        assert.deepEqual(sortTriangles([{ vertices: 'ABC', a: 10, b: 20, c: 22.36 }, {vertices: 'DEF', d: 10, e: 20, f: 12.36}]),
          ['DFW', 'BCA']);
      });
    })
  })
}