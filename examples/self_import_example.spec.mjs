import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);
import * as modA from './self_import_example.mjs';

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
