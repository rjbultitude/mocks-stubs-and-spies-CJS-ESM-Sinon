import { ExternalClass } from './module_B.js';

export class ModuleClass {
  someFn(str) {
    console.log('str', str);
    return str;
  }

  testFn() {
    return this.someFn('real function call');
  }

  exTestFn() {
    const extDepClass = new ExternalClass();
    console.log('ext dep method called');
    return extDepClass.externalDep();
  }
}

