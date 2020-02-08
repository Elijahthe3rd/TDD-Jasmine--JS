function add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++)
        sum += arguments[i];
    return sum;
}

function multiply() {
    let product = arguments[0];
    for (let i = 1; i < arguments.length; i++)
        product *= arguments[i];
    return product;
}

module.exports = { add, multiply }