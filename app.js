console.log("Hello World")

const sum = (a, b) => {
    return a + b;
}

console.log(sum(7,3));

// App de convertidor de divisas

let oneEuroIs = {
    "JPY": 127.9,
    "USD": 1.2,
    "GBP": 0.8,
}


function fromEuroToDollar(euro){
    return euro*oneEuroIs.USD
}


function fromDollarToYen(usd){
    return (usd/oneEuroIs.USD)*oneEuroIs.JPY
}


function fromYenToPound(yen){
    return (yen/oneEuroIs.JPY)*oneEuroIs.GBP
}


module.exports = {sum, fromDollarToYen, fromEuroToDollar, fromYenToPound};