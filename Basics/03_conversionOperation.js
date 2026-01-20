//"A"
let score_01 = "33" //string type
//for empty string "" , it is converted to 0
//for non empty string "akshat", it is converted to NaN
//for undefined, it is converted to NaN
//for null, it is converted to 0
//for true, it is converted to 1
//for false, it is converted to 0

console.log(typeof score_01) // string
console.log(typeof(score_01)) // string

let valueInNumber_01 = Number(score_01) // conversion from string to number
console.log(typeof(valueInNumber_01)) // number
console.log(valueInNumber_01) // 33

//"B"
let score_02 = "abc" // string type 

console.log(typeof score_02) // string
console.log(typeof(score_02)) // string

let valueInNumber_02 = Number(score_02) // conversion from string to number
console.log(typeof(valueInNumber_02)) // number
console.log(valueInNumber_02) // NaN -> Not a Number -> it is a special number which indicates that the value is not a valid number

//"C"
let score_03 = "33abs"//  string type

console.log(typeof score_03) // string
console.log(typeof(score_03)) // string

let valueInNumber_03 = Number(score_03) // conversion from string to number
console.log(typeof(valueInNumber_03)) // number
console.log(valueInNumber_03) // NaN -> Not a Number -> it is a special number which indicates that the value is not a valid number

//"D"
let score_04 = undefined // undefined type

console.log(typeof score_04) // undefined
console.log(typeof(score_04)) // undefined

let valueInNumber_04 = Number(score_04) // conversion from string to number
console.log(typeof(valueInNumber_04)) // number
console.log(valueInNumber_04) // NaN -> Not a Number -> it is a special number which indicates that the value is not a valid number 

//"E"
let score_05 = null // null type

console.log(typeof score_05) // object 
console.log(typeof(score_05)) // object

let valueInNumber_05 = Number(score_05) // conversion from string to number
console.log(typeof(valueInNumber_05)) // number
console.log(valueInNumber_05) // 0

//"F"
let score_06 = true // boolean type

console.log(typeof score_06) // boolean
console.log(typeof(score_06)) // boolean     

let valueInNumber_06 = Number(score_06) // conversion from string to number
console.log(typeof(valueInNumber_06)) // number
console.log(valueInNumber_06) // 1

//Notes:
// 33 -> 33
// "22" -> 22
// "33abs" -> NaN
// undefined -> NaN
// null -> 0
// true -> 1
// false -> 0

let isLoggedIn = 1
//for number to boolean conversion
// for empty string "" , 0, null, undefined, NaN -> converted to false
// for non empty string "akshat", non zero number 33, true -> converted to true
let booleanIsLoggedIn = Boolean(isLoggedIn) // conversion from number to boolean

console.log(typeof booleanIsLoggedIn) // boolean
console.log(booleanIsLoggedIn) // true

let someNumber = 33
// for number to string conversion
let stringSomeNumber = String(someNumber) // conversion from number to string

console.log(typeof stringSomeNumber) // string


// *********************** Operations ***********************


let value = 3
let  negvalue = -value
console.log(value)
console.log(negvalue)
console.log(2+2)
console.log("2"+"2") // concatenation
console.log("Akshat "+ "Kumar") // concatenation
console.log("2"+ 2) // concatenation
console.log(+"2"+ 2) // 4 -> unary plus operator converts string to number
console.log(+"Akshat"+ 2) // NaN -> unary plus operator converts string to number
console.log(5-"2") // 3 -> unary minus operator converts string to number
console.log("5"-"2") // 3 -> unary minus operator converts string to number
console.log("Akshat"-"2") // NaN -> unary minus operator converts string to number
console.log(2*"3") // 6 -> multiplication operator converts string to number
console.log("4"*"2") // 8 -> multiplication operator converts string to number
console.log("Akshat"*"2") // NaN -> multiplication operator converts string to number
console.log("2"*3) // 6 -> multiplication operator converts string to number
console.log("6"/"2") // 3 -> division operator converts string to number    
console.log("Akshat"*2) // NaN -> multiplication operator converts string to number
console.log("Akshat"/2) // NaN -> division operator converts string to number
console.log(2**3) // 8 -> exponentiation operator
console.log(5%2) // 1 -> modulus operator
console.log("5"%2) // 1 -> modulus operator converts string to number
console.log("Akshat"%2) // NaN -> modulus operator converts string to number
console.log(+"") // 0 -> unary plus operator converts empty string to number
console.log(Number("")) // 0 -> conversion from empty string to number
console.log(Boolean("")) // false -> conversion from empty string to boolean
console.log(+" ") // 0 -> unary plus operator converts whitespace string to number
console.log(Number(" ")) // 0 -> conversion from whitespace string to number
console.log(Boolean(" ")) // true -> conversion from whitespace string to boolean


let str1 = "akshat"
let str2 = " kumar"
let str3 = str1 + str2 // concatenation
console.log(str3)

console.log("1" + 2) // "12" -> string concatenation
console.log(1 + "2") // "12" -> string concatenation
console.log("1" - 2) // -1 -> number subtraction
console.log(1 - "2") // -1 -> number subtraction
console.log("2" + 2 + 2) // "222" -> left to right evaluation
console.log(2 + 2 + "2") // "42" -> left to right evaluation
console.log("2" * 2 * 2) // 8 -> multiplication operator converts string to number

console.log(true)
console.log(false) 
console.log(+true) // 1 -> unary plus operator converts boolean to number
console.log(+false) // 0 -> unary plus operator converts boolean to number
console.log(false + 2) // 2 -> addition operator converts boolean to number
console.log(true + 2) // 3 -> addition operator converts boolean to number

let gameCounter = 100

++gameCounter
console.log(gameCounter) // 101

//link to study
//https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

