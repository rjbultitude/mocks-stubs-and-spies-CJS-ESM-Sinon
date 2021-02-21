import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);
import * as classMod from './class_example.js';
import { EXT_DEP_STR } from '../utils/constants.js';

describe('class example someFn', function() {
  it('should return arg', function() {
    const classObj = new classMod.ModuleClass();
    const testString = 'test string';
    expect(classObj.someFn(testString)).to.equal(testString);
  });
});

describe('class example testFn', function() {
  beforeEach(function() {
    this.classObj = new classMod.ModuleClass();
    this.someFnStub = sinon.stub(this.classObj, 'someFn').returns('not real');
    this.result = this.classObj.testFn();
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

describe('class example exTestFn', function() {
  beforeEach(function() {
    const classObj = new classMod.ModuleClass();
    this.exTestFnSpy = sinon.spy(classObj, 'exTestFn');
    this.result = classObj.exTestFn();
  });
  afterEach(function() {
    this.exTestFnSpy.restore();
  });
  it('should call exTestFn', function() {
    expect(this.exTestFnSpy).called;
  });
  it('should return ', function() {
    expect(this.result).to.equal(EXT_DEP_STR);
  });
});
