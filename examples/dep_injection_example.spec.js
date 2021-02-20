import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);
import * as modA from './dep_injection_example.mjs';
import { modAMethods } from './dep_injection_example.mjs';
import * as modB from './module_B.mjs';
import { modBMethods } from './module_B.mjs';

describe('someFn', function() {
  it('should return arg', function() {
    const testString = 'test string';
    expect(modA.someFn(testString)).to.equal(testString);
  });
});

describe('depInjtestFn', function() {
  it('should call someFn', function() {
    const someFnStub = sinon.stub().returns('not real');
    const result = modA.depInjtestFn(someFnStub);
    expect(someFnStub).called;
    expect(result).to.equal('not real');
  });
});

describe('nameSpaceTestFn', function() {
  it('should call someFn', function() {
    const someFnStub = sinon.stub(modAMethods, 'someFn').returns('not real');
    const result = modAMethods.nameSpaceTestFn();
    expect(someFnStub).called;
    expect(result).to.equal('not real');
  });
});

describe('exTestFn', function() {
  xit('should call externalDep', function() {
    const extDepString = 'not real ext dep';
    const externalDepStub = sinon.stub(modB, 'externalDep').returns(extDepString);
    const result = modB.externalDep();
    expect(externalDepStub).called;
    expect(result).to.equal(extDepString);
  });
});

describe('exTestClassFn', function() {
  it('should call externalDep', function() {
    const moduleBClassSpy = sinon.spy(modBMethods, 'ModuleBClass');
    modA.exTestClassFn();
    expect(moduleBClassSpy).called;
    expect(result).to.equal('external dep');
  });
});
