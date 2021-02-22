import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);
import { namespaceMod } from './namespace_example.js';
import { modBMethods } from './module_B.js';
import { EXT_DEP_STR } from '../utils/constants.js';

describe('namespace example someFn', function() {
  it('should return arg', function() {
    const testString = 'test string';
    expect(namespaceMod.someFn(testString)).to.equal(testString);
  });
});

describe('namespace example testFn', function() {
  beforeEach(function() {
    this.someFnStub = sinon.stub(namespaceMod, 'someFn').returns('not real');
    this.result = namespaceMod.testFn(this.someFnStub);
  });
  afterEach(function() {
    this.someFnStub.restore();
  });
  it('should call someFn', function() {
    expect(this.someFnStub).called;
  });
  it('should return ', function() {
    expect(this.result).to.equal('not real');
  });
});

describe('namespace example exTestFn', function() {
  beforeEach(function() {
    this.externalDepSpy = sinon.spy(modBMethods, 'externalDep');
    console.log('this.externalDepSpy', this.externalDepSpy);
  });
  afterEach(function() {
    this.externalDepSpy.restore();
  });
  it('should call externalDep', function() {
    namespaceMod.exTestFn();
    expect(this.externalDepSpy).called;
  });
  it('should return ', function() {
    const result = namespaceMod.exTestFn();
    expect(result).to.equal(EXT_DEP_STR);
  });
});
