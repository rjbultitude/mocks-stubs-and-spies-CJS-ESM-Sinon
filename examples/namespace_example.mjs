export function someFn(str) {
  console.log('str', str);
  return str;
}

export function nameSpaceTestFn() {
  const realStr = 'real function call';
  console.log('realStr', realStr);
  return modAMethods.someFn(realStr);
}

export const nameSpaceMod = {
  someFn,
  nameSpaceTestFn,
};
