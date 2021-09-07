// // importar la función sum del archivo app.js
const { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');

// // comienza tu primera prueba
// test('adds 14 + 9 to equal 23', () => {
//     //dentro de la prueba llamamos a nuestra función sum con 2 números
//     let total = sum(14,9);

//     // esperamos que la suma de esos 2 números sea 23
//     expect(total).toBe(23);
// });


test("Un euro equivale a 1.2 usd", function() {
    expect(fromEuroToDollar(3.5)).toBe(4.2);
});

test("Un dolar equivale a 106.5833 yen", function() {
    expect(fromDollarToYen(3)).toBe(319.75);
});

test("Un yen equivale a 0.8 libras", function() {
    expect(fromYenToPound(127.9)).toBe(0.8);
});