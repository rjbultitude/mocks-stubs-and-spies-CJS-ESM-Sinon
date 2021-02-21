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
  beforeEach(function() {
    this.someFnStub = sinon.stub().returns('not real');
    this.result = depInjectionMod.testFn(this.someFnStub);
  });
  it('should call someFn', function() {
    expect(this.someFnStub).called;
  });
  it('should return "not real" string', function() {
    expect(this.result).to.equal('not real');
  });
});

describe('dependency injection example exTestFn', function() {
  beforeEach(function() {
    this.extDepString = 'not real ext dep';
    this.externalDepStub = sinon.stub().returns(this.extDepString);
    this.result = depInjectionMod.exTestFn(this.externalDepStub);
  });
  it('should call externalDep', function() {
    expect(this.externalDepStub).called;
  });
  it('should return ', function() {
    expect(this.result).to.equal(this.extDepString);
  });
});
