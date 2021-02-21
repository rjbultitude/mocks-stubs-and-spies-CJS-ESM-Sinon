import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);
import * as depInjectionMod from './dep_injection_example.mjs';
import * as modB from './module_B.mjs';

describe('dependency injection example someFn', function() {
  it('should return arg', function() {
    const testString = 'test string';
    expect(depInjectionMod.someFn(testString)).to.equal(testString);
  });
});

describe('dependency injection example testFn', function() {
  it('should call someFn', function() {
    const someFnStub = sinon.stub().returns('not real');
    const result = depInjectionMod.testFn(someFnStub);
    expect(someFnStub).called;
    expect(result).to.equal('not real');
  });
});

describe('dependency injection example exTestFn', function() {
  it('should call externalDep', function() {
    const extDepString = 'not real ext dep';
    const externalDepStub = sinon.stub().returns(extDepString);
    const result = depInjectionMod.exTestFn(externalDepStub);
    expect(externalDepStub).called;
    expect(result).to.equal(extDepString);
  });
});
