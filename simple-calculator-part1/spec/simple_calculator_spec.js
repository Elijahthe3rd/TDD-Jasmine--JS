const { add, multiply } = require('../src/simple_calculator.js');

describe("simple calculator", function() {

    it("should add two numbers", () => {
        expect(add(0, 0)).toEqual(0);
        expect(add(-1, -1)).toEqual(-2);
        expect(add(4, 5)).toEqual(9);
    })

    it("should add as many numbers as I want", () => {
        expect(add(1, 2, 3, 4)).toEqual(10);
    });

    it("should multiply 2 numbers", () => {
        expect(multiply(1, 2)).toEqual(2)
    });

    it("should multiply as many numbers as I want", () => {
        expect(multiply(1, 2, 3, 4)).toEqual(24)
    });

});