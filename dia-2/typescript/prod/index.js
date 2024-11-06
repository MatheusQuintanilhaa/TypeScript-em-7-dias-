"use strict";
// tipo number
let price = 40;
// tipo string
let item = "apple";
// tipo boolean
let inStore = true;
// tipo any
let value;
value = 10;
value = "Matheus";
//tipo array
let prices = [10, 20, 30, 40, 60];
//tipo tuple
let itens = ["Apple", 3, true];
itens[1].toString;
// tipo enum
// const admin = 1;
// const read = 2;
// const backup = 3;
var Role;
(function (Role) {
    Role[Role["admin"] = 1] = "admin";
    Role[Role["read"] = 2] = "read";
    Role[Role["backup"] = 3] = "backup";
})(Role || (Role = {}));
const user = {
    firstName: "Matheus",
    age: 29,
    role: Role.backup,
};
console.log(user);
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["NotFound"] = 404] = "NotFound";
    ErrorCode[ErrorCode["ServerError"] = 500] = "ServerError";
    ErrorCode[ErrorCode["BadRequest"] = 400] = "BadRequest";
})(ErrorCode || (ErrorCode = {}));
const request = {
    failed: ErrorCode.BadRequest,
};
if (request.failed === ErrorCode.BadRequest) {
    console.log("Request failed due to a bad request.");
}
console.log(request);
// Function return
function add(num1, num2) {
    return num1 + num2;
}
// Function void
function result(price) {
    console.log("The result is " + price);
}
console.log(result(add(6, 5)));
// Objetos
const profile = {
    firstName: "Matheus",
    age: 29,
    lastName: "Q",
};
profile.lastName = "Quintanilha";
console.log(profile);
// unknown
let itemInput;
let itemName;
itemInput = 10;
itemInput = "Apple";
if (itemInput === "string") {
    itemName = itemInput;
}
function cadastrarProduto(input) {
    let nomeProduto;
    if (typeof input === "string") {
        nomeProduto = input;
        console.log(`Produto cadastrado: ${nomeProduto}`);
    }
    else {
        console.log(`Erro: o nome do produto deve ser uma string`);
    }
}
cadastrarProduto("Celular");
cadastrarProduto(123);
