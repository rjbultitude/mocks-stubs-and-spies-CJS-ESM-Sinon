import { externalDep } from './module_B.js';

export function someFn(str) {
  console.log('str', str);
  return str;
}

export function testFn() {
  const realStr = 'real function call';
  console.log('realStr', realStr);
  return someFn(realStr);
}

export function exTestFn() {
  console.log('ext dep called');
  return externalDep();
}
