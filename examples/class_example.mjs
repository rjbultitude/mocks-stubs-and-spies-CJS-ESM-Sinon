export class ModuleClass {
  someFn(str) {
    console.log('str', str);
    return str;
  }

  testFn() {
    return this.someFn('real function call');
  }
}

export function exTestClassFn() {
  console.log('ext dep method called');
  const extDepClass = new ModuleBClass();
  return extDepClass.testFn();
}
