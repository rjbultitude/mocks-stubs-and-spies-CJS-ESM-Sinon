import { modBMethods } from './module_B.js';

export function someFn(str) {
  console.log('str', str);
  return str;
}

export function testFn() {
  const realStr = 'real function call';
  console.log('realStr', realStr);
  return namespaceMethods.someFn(realStr);
}

export function exTestFn() {
  console.log('ext dep called');
  return modBMethods.externalDep();
}

export const namespaceMethods = {
  someFn,
  testFn,
  exTestFn,
};
