import * as selfImportMod from './self_import_example.js';
import * as module_B from './module_B.js';

export function someFn(str) {
  console.log('str', str);
  return str;
}

export function testFn() {
  const realStr = 'real function call';
  console.log('realStr', realStr);
  return selfImportMod.someFn(realStr);
}

export function exTestFn() {
  return module_B.externalDep();
}
