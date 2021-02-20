import * as selfImportMod from './self_import_example.mjs';

export function someFn(str) {
  console.log('str', str);
  return str;
}

export function testFn() {
  const realStr = 'real function call';
  console.log('realStr', realStr);
  return selfImportMod.someFn(realStr);
}
