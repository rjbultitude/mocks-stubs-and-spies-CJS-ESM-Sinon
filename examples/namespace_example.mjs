import { modB } from './module_b.mjs';

export function someFn(str) {
  console.log('str', str);
  return str;
}

export function testFn() {
  const realStr = 'real function call';
  console.log('realStr', realStr);
  return nameSpaceMod.someFn(realStr);
}

export function exTestFn() {
  console.log('ext dep called');
  return modB.externalDep();
}

export const nameSpaceMod = {
  someFn,
  testFn,
  exTestFn,
};
