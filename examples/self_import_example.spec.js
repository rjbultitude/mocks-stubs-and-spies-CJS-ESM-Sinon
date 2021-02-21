import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);
import * as selfImportMod from './self_import_example.js';
import * as module_B from './module_B.js';
import { EXT_DEP_STR } from '../utils/constants.js';

describe('self import someFn', function() {
  it('should return arg', function() {
    const testString = 'test string';
    expect(selfImportMod.someFn(testString)).to.equal(testString);
  });
});

describe('self import testFn', function() {
  beforeEach(function() {
    this.someFnStub = sinon.stub(selfImportMod, 'someFn').returns('not real');
    this.result = selfImportMod.testFn();
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
    this.externalDepSpy = sinon.spy(module_B, 'externalDep');
    this.result = selfImportMod.exTestFn();
  });
  afterEach(function() {
    this.externalDepSpy.restore();
  });
  it('should call externalDep', function() {
    expect(this.externalDepSpy).called;
  });
  it('should return ', function() {
    expect(this.result).to.equal(EXT_DEP_STR);
  });
});
