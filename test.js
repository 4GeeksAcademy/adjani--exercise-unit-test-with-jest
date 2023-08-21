
const { sum } = require('./app.js')

describe("Testing sum functions",()=>{

    test("adds 14 + 9 to equal 23", () =>{
        let total = sum(14,9)
        expect(total).toBe(23)
    });
})

describe("Conversion function",()=>{
    test("One euro should be 1.206 dollars", function(){
        // importo la funcion desde app.js
        const { fromEuroToDollar } = require('./app.js')
        
        // hago mi comparacion (la prueba)
        expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
    })
})

describe("Conversion function",()=>{
    test("One dollar should be 447.65 yens", function(){
        // importo la funcion desde app.js
        const { fromDollarToYen } = require('./app.js')
        
        // hago mi comparacion (la prueba)
        expect(parseFloat(fromDollarToYen(3.5))).toBe(447.65); //1 dólar son 127.9 yenes, entonces 3.5 dolares deberian ser = (3.5 * 127.9)
    })
})

describe("Conversion function",()=>{
    test("One yen should be 2.8 pounds", function(){
        // importo la funcion desde app.js
        const {fromYenToPound} = require('./app.js')
        
        // hago mi comparacion (la prueba)
        expect(parseFloat(fromYenToPound(3.5))).toBe(2.8); //1 yen son 0.8 libras, entonces 3.5 yenes deberian ser = (3.5 * 0.8)
    })
})