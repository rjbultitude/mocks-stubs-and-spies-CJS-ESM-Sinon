import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);
import * as classMod from './class_example.mjs';
import { EXT_DEP_STR } from '../utils/constants.mjs';

describe('class example someFn', function() {
  it('should return arg', function() {
    const classObj = new classMod.ModuleClass();
    const testString = 'test string';
    expect(classObj.someFn(testString)).to.equal(testString);
  });
});

describe('class example testFn', function() {
  it('should call someFn', function() {
    const classObj = new classMod.ModuleClass();
    const someFnStub = sinon.stub(classObj, 'someFn').returns('not real');
    const result = classObj.testFn();
    expect(someFnStub).called;
    expect(result).to.equal('not real');
  });
});

describe('class example exTestFn', function() {
  const classObj = new classMod.ModuleClass();
  const exTestFnSpy = sinon.spy(classObj, 'exTestFn');
  const result = classObj.exTestFn();
  expect(exTestFnSpy).called;
  expect(result).to.equal(EXT_DEP_STR);
});
