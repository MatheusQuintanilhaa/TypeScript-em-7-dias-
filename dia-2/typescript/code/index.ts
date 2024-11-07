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
let prices: number[] = [10, 20, 30, 40, 60];

//tipo tuple
let itens: [string, number, boolean] = ["Apple", 3, true];

itens[1].toString;

// tipo enum

// const admin = 1;
// const read = 2;
// const backup = 3;

enum Role {
  admin = 1,
  read = 2,
  backup = 3,
}

const user = {
  firstName: "Matheus",
  age: 29,
  role: Role.backup,
};

console.log(user);

enum ErrorCode {
  NotFound = 404,
  ServerError = 500,
  BadRequest = 400,
}

const request = {
  failed: ErrorCode.BadRequest,
};

if (request.failed === ErrorCode.BadRequest) {
  console.log("Request failed due to a bad request.");
}

console.log(request);

// Function return
function add(num1: number, num2: number): number {
  return num1 + num2;
}

// Function void
function result(price: number) {
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
let itemInput: unknown;
let itemName: string;

itemInput = 10;
itemInput = "Apple";

if (itemInput === "string") {
  itemName = itemInput;
}

function cadastrarProduto(input: unknown) {
  let nomeProduto: string;

  if (typeof input === "string") {
    nomeProduto = input;
    console.log(`Produto cadastrado: ${nomeProduto}`);
  } else {
    console.log(`Erro: o nome do produto deve ser uma string`);
  }
}

cadastrarProduto("Celular");
cadastrarProduto(123);

// never
function generateError(message: string, code: number) {
  throw { message: message, errorCode: code };
}

generateError("O codigo falhou", 500);
