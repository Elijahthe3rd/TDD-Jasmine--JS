class Calculator {
  constructor() {
    this.slots = {};
    this.regex = /\d+/g;
    this.last_value=0
  }

  add() {
    let sum = 0;
    for (var i = 0; i < arguments.length; i++) {
      if (arguments[i] === `LAST`) {
        sum += parseInt(this.last())
      } else if (arguments[i] != 'LAST' && typeof (arguments[i]) == "string") {
        let getNum = arguments[i].match(this.regex)
        sum += parseInt(Object.values(this.slots[getNum])[0])
      } else {
        sum += arguments[i]
      }
    }
    this.last_value = sum;
    return sum;
  };

  multiply() {
    let product = 1;
    for (var i = 0; i < arguments.length; i++) {
      if (arguments[i] === `LAST`) {
        product *= parseInt(this.last());
      } else if (arguments[i] != `LAST` && typeof (arguments[i]) == `string`) {
        let getNum = arguments[i].match(this.regex)
        product *= parseInt(Object.values(this.slots[getNum])[0])
      } else {
        product *= parseInt(arguments[i])
      }
    }
    this.last_value = product;
    return product;
  }

  last() {
    return parseInt(this.last_value);
  };

  set_slot(index) {
    this.slots[index] = {number: this.last()}
    const slot_results = Object.values(this.slots[index])

    return parseInt(slot_results)
  }

  get_slot(index) {
    return (Object.values(this.slots[index])[0])
  };

};
module.exports = Calculator

