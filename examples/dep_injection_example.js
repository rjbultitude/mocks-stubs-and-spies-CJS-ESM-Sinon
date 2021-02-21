import { externalDep } from './module_B.js';

export function someFn(str) {
  console.log('str', str);
  return str;
}

export function testFn(_someFn = someFn) {
  const realStr = 'real function call';
  console.log('realStr', realStr);
  return _someFn(realStr);
}

export function exTestFn(_externalDep = externalDep) {
  console.log('ext dep called');
  return _externalDep();
}
