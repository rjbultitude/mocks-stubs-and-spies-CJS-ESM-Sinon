import { externalDep } from './module_B.mjs';

export function someFn(str) {
  console.log('str', str);
  return str;
}

// Dependency injection
export function depInjtestFn(_someFn = someFn) {
  const realStr = 'real function call';
  console.log('realStr', realStr);
  return _someFn(realStr);
}

export function exTestFn() {
  console.log('ext dep called');
  externalDep();
}
