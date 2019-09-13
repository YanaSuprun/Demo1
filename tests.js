import { test1 } from './src/tests/test1.js';
import { test4 } from './src/tests/test4.js';
import { test6 } from './src/tests/test6.js';


mocha.setup('bdd');

test1();
test4();
test6();

mocha.run();
