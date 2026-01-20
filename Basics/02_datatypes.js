"use strict" // treat all JS code as modern JS code

// alert(1+1) // we can use alert only in browser not in nodejs

console.log(1+1) // we can use console.log in both browser and nodejs

//code readability should be there
/*
for documentation-
mdn
tc39.es
*/

// Datatypes in JS

let name = "Akshat" // strinng datatype
let age = 22 // number datatype
let isApproved = true // boolean datatype
let firstName = undefined // undefined datatype
let lastName = null // null datatype

//number => 2 to power 53
//bigint => greater than 2 to power 53
//string => '', "", ``
//boolean => true/false
//undefined => default value of uninitialized variable
//null => empty value or standalone value
//symbol => unique value
//object => key value pair
//typeof operator

console.log(typeof name) // string
console.log(typeof age) // number
console.log(typeof isApproved) // boolean
console.log(typeof firstName) // undefined
console.log(typeof lastName) // object