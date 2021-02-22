import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);
import * as stndExportMod from './standard_export_example.js';
import * as module_B from './module_B.js';
import { EXT_DEP_STR } from '../utils/constants.js';

describe('standard export example someFn', function() {
  it('should return arg', function() {
    const testString = 'test string';
    expect(stndExportMod.someFn(testString)).to.equal(testString);
  });
});

describe('standard export example testFn', function() {
  beforeEach(function() {
    this.someFnStub = sinon.stub(stndExportMod, 'someFn').returns('not real');
    this.result = stndExportMod.testFn(this.someFnStub);
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

describe('standard export example exTestFn', function() {
  beforeEach(function() {
    this.externalDepStub = sinon.stub(module_B, 'externalDep').returns(EXT_DEP_STR);
  });
  afterEach(function() {
    this.externalDepStub.restore();
  });
  it('should call externalDep', function() {
    stndExportMod.exTestFn();
    expect(this.externalDepStub).called;
  });
  it('should return ', function() {
    const result = stndExportMod.exTestFn();
    expect(result).to.equal(EXT_DEP_STR);
  });
});
