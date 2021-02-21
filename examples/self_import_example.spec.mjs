import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);
import * as selfImportMod from './self_import_example.mjs';

describe('self import someFn', function() {
  it('should return arg', function() {
    const testString = 'test string';
    expect(selfImportMod.someFn(testString)).to.equal(testString);
  });
});

describe('self import testFn', function() {
  it('should call someFn', function() {
    const someFnStub = sinon.stub(selfImportMod, 'someFn').returns('not real');
    const result = selfImportMod.testFn();
    expect(someFnStub).called;
    expect(result).to.equal('not real');
  });
});
