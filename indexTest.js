/* eslint-disable no-undef */
const chai = require('chai');
const assertArrays = require('chai-arrays');
const computeGeometries = require('../index.js');
// eslint-disable-next-line prefer-destructuring
const expect = chai.expect;

chai.use(assertArrays);

describe('isAnArray', () => {
    it('Should return an Array', () => {
        expect([computeGeometries]).to.be.array();
    });
});
