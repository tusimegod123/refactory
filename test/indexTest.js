/* eslint-disable quotes */
/* eslint-disable no-undef */
const chai = require('chai');
const assertArrays = require('chai-arrays');
const computeGeometries = require('../index.js');
// const perimeterOfRectangle1 = require('../index.js');
const myFunctions = require('../index');
// eslint-disable-next-line prefer-destructuring
const expect = chai.expect;

chai.use(assertArrays);

describe('refactory', () => {
    it('Should return an Array', () => {
        expect([computeGeometries]).to.be.array();
    });
});

describe('perimeterOfRectangle1', () => {
    it('Should calculate a perimeter of a rectangle', () => {
        expect(myFunctions.perimeterOfRectangle1(3, 4)).to.equal(14);
    });
});

describe("Calculate Circumference of circle", () => {
    it("should calculate the circumference of a circle", () => {
        expect(myFunctions.circumferenceOfAcircle(2)).to.equal(
            12.571428571428571
        );
    });
});
