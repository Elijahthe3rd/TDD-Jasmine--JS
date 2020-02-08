/*
N.B) I commented this import out cause in the automaker it will be replaced
*/

const Calculator = require("../src/simpleCalculator.js")
describe("simple calculator", function() {

  it("should add two numbers", () => {
    let calculator=new Calculator()

    expect(calculator.add(0,0)).toEqual(0);
    expect(calculator.add(-1,-1)).toEqual(-2);
    expect(calculator.add(4,5)).toEqual(9);
  });
  
  it("should add as many numbers as I want", () => {
    let calculator=new Calculator()

    expect(calculator.add(1,2,3,4)).toEqual(10);
  });
  
  it("should multiply two numbers", () => {
    let calculator=new Calculator()

    expect(calculator.multiply(1,2)).toEqual(2);
  });

  //extra tests
  it("should multiply as many numbers as I want", () => {
    let calculator=new Calculator()
    expect(calculator.multiply(1,2,3,4)).toEqual(24);
  });

  it("should return the last result", () => {
    let calculator=new Calculator()
    expect(calculator.add(1,2)).toEqual(3);
    expect(calculator.last()).toEqual(3);
  });

  it("should allow \"LAST\" to be used as parameter", () => {
    let calculator=new Calculator()
    expect(calculator.add(1, 2)).toEqual(3);
    expect(calculator.multiply("LAST", 5)).toEqual(15);
  });

  it("should remember more stuff", () => {
    let calculator = new Calculator();
    expect(calculator.add(1, 2)).toEqual(3);
    expect(calculator.set_slot(1)).toEqual(3);
    expect(calculator.get_slot(1)).toEqual(3);
    expect(calculator.add(10, 20)).toEqual(30);
    expect(calculator.set_slot(2)).toEqual(30);
    expect(calculator.get_slot(2)).toEqual(30);
    expect(calculator.add(100, 200)).toEqual(300);
    expect(calculator.last()).toEqual(300);
  });

  it("should allow the use of memory slots and LAST as arguments", () =>{
    let calculator = new Calculator();
    expect(calculator.add(1, 2)).toEqual(3);
    
    expect(calculator.set_slot(1)).toEqual(3);
    expect(calculator.get_slot(1)).toEqual(3);
    expect(calculator.add(10, 20)).toEqual(30);
    
    expect(calculator.set_slot(2)).toEqual(30);
    
    expect(calculator.add(100,200)).toEqual(300);
    expect(calculator.get_slot(1)).toEqual(3);
    expect(calculator.get_slot(2)).toEqual(30);
    expect(calculator.last()).toEqual(300);
    

    expect(calculator.add("LAST", 10)).toEqual(310);
    expect(calculator.add("SLOT_1",5)).toEqual(8);
    expect(calculator.multiply("SLOT_2", 2)).toEqual(60);

  });

   it(" should allow slots to be used in any order ", () => {
     let calculator=new Calculator()
     expect(calculator.add(1, 2)).toEqual(3);
     expect(calculator.set_slot(8)).toEqual(3);
     expect(calculator.get_slot(8)).toEqual(3);
     expect(calculator.add(10, 20)).toEqual(30);
     expect(calculator.set_slot(2)).toEqual(30);
     expect(calculator.get_slot(2)).toEqual(30);
     expect(calculator.get_slot(8)).toEqual(3);
 });
});
