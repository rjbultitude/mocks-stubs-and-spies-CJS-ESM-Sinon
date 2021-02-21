import { Spy } from './spy.js';
import * as module_A from './module_A.js';

console.log(module_A.someFn);

const someFnspy = Spy(module_A, 'someFn');
module_A.depInjtestFn();
console.log('someFnspy.count', someFnspy.count);
