console.log(3 > 2) // true
console.log(3 < 2) // false
console.log(2 >= 2) // true
console.log(2 <= 2) // true
console.log(3 == 2) // false
console.log(3 != 2) // true
console.log(3 === 2) // false

console.log("2" > 1) // true
console.log("02" > 1) // true

console.log(null > 0) // false
console.log(null >= 0) // true
console.log(null == 0) // false
// Explanation:
// null is only equal to undefined
// when we compare null with any other value other than undefined, it is converted to number 0
// for > and < comparison, null is converted to 0
// for >= and <= comparison, null is converted to 0
// but for == comparison, null is not converted to any value and it is only equal to undefined

console.log(undefined > 0) // false
console.log(undefined < 0) // false
console.log(undefined >= 0) // false    
console.log(undefined <= 0) // false
console.log(undefined == 0) // false
// Explanation:  
// undefined is only equal to null
// when we compare undefined with any other value other than null, it is converted to NaN
// for >, <, >= and <= comparison, undefined is converted to NaN
// for == comparison, undefined is not converted to any value and it is only equal to null

//=== strict equality operator
//== loose equality operator
// in strict equality operator, data type and value both should be same
console.log(3 === 3) // true
console.log(3 === "3") // false 
// in loose equality operator, only value should be same, data type is not considered
console.log(3 == 3) // true
console.log(3 == "3") // true