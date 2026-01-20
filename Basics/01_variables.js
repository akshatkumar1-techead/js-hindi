const account_Id = 1444
let account_Email = "aks@.ac.in"
var account_Password = "akshat1234"
account_City = "Pune"
let account_State;

console.table([account_Id, account_Email, account_Password, account_City, account_State]);
//account_Id = 2333 // we cannot change the value of constant type variable
account_Email = "akshat@.ac.in"
account_Password = "akshat4321"
account_City = "Mumbai"
account_State = "Maharashtra"
console.table([account_Id, account_Email, account_Password, account_City, account_State]);

/* we have 3 types of variable declaration keywords in JS
1. const -> constant value -> we cannot change the value of constant type variable
2. let -> we can change the value of let type variable
3. var -> we can change the value of var type variable
4. without any keyword -> it is also a variable but it is not a good practice to use it
5. Prefer to use const and let only
   because of block scope and funtional scope
   with var type variable
 */