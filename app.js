const sum = (a,b) => {
    return a+b
}
//console.log(sum(7,3))


let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromDollarToYen(valueInDollar){
    let valueInYen = valueInDollar * 127.9;
    // retornamos el valor
    return valueInYen.toFixed(2);
}

function fromEuroToDollar(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

function fromYenToPound(valueInYen){
    let valueInPound = valueInYen * 0.8;
    // retornamos el valor
    return valueInPound.toFixed(1);
}

module.exports = {sum, fromDollarToYen, fromEuroToDollar, fromYenToPound};
