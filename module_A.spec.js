import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);
// import * as modA from './module_A.js';
import { modA } from './module_A.mjs';
// import * as modB from './module_B.js';
import { modB } from './module_B.mjs';

describe('someFn', function() {
  it('should return arg', function() {
    const testString = 'test string';
    expect(modA.someFn(testString)).to.equal(testString);
  });
});

describe('testFn', function() {
  it('should call someFn', function() {
    const someFnStub = sinon.stub(modA, 'someFn').returns('not real');
    const result = modA.testFn();
    expect(someFnStub).called;
    expect(result).to.equal('not real');
  });
});

describe('exTestFn', function() {
  it('should call externalDep', function() {
    const extDepString = 'not real ext dep';
    const externalDepStub = sinon.stub(modB, 'externalDep').returns(extDepString);
    const result = modB.externalDep();
    expect(externalDepStub).called;
    expect(result).to.equal(extDepString);
  });
});
