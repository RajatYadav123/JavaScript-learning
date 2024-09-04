const accountId = 13122
let accountEmail ="rajat.gmail"
var accountPassword ="noo34"
/*
prefer not to use var
because of issue of block scope and functional scope
*/ 
accountCity="delhi"
let accountstate;
//accountId =2  not allowed to change the value of constant

console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity,accountstate])

