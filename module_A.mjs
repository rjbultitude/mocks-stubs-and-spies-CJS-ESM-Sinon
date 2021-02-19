import { externalDep } from './module_B.mjs';

export function someFn(str) {
  console.log('str', str);
  return str;
}

export function testFn() {
  const realStr = 'real function call';
  console.log('realStr', realStr);
  return modA.someFn(realStr);
}

export function exTestFn() {
  console.log('ext dep called');
  externalDep();
}

export const modA = {
  someFn,
  testFn,
  exTestFn,
};
