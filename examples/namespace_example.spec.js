import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);
import { nameSpaceMod } from './namespace_example.mjs';
import { modB } from './module_B.mjs';
import { EXT_DEP_STR } from '../utils/constants.mjs';

describe('namespace example someFn', function() {
  it('should return arg', function() {
    const testString = 'test string';
    expect(nameSpaceMod.someFn(testString)).to.equal(testString);
  });
});

describe('namespace example testFn', function() {
  it('should call someFn', function() {
    const someFnStub = sinon.stub(nameSpaceMod, 'someFn').returns('not real');
    const result = nameSpaceMod.testFn(someFnStub);
    expect(someFnStub).called;
    expect(result).to.equal('not real');
  });
});

describe('namespace example exTestFn', function() {
  it('should call externalDep', function() {
    const externalDepSpy = sinon.spy(modB, 'externalDep');
    const result = nameSpaceMod.exTestFn();
    expect(externalDepSpy).called;
    expect(result).to.equal(EXT_DEP_STR);
  });
});
