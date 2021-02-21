import modB, { externalDep } from './module_b.js';

export function someFn(str) {
  console.log('str', str);
  return str;
}

export function testFn() {
  const realStr = 'real function call';
  console.log('realStr', realStr);
  return namespaceMod.someFn(realStr);
}

export function exTestFn() {
  console.log('ext dep called');
  return externalDep();
}

export const namespaceMod = {
  someFn,
  testFn,
  exTestFn,
};
