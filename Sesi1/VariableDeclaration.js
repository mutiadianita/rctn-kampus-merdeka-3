let score = 9;

score = "Score";

// ------------------------------

// Ini comment
// Immutable (tidak bisa diubah) type data:
let number = 9; // integer
let word = "9";  // String
let isTrue = false; //Boolean
let character = null; //Null

let hello; // undefined

console.log(number);

// ------------------------------

let playerName = "Budi";
console.log(playerName);
playerName = "Andi";
console.log(playerName);


// ------------------------------

let weight = 75;
console.log(weight + 15);

let originalNumber = 23;
let numberToBeAdded = 7;
let newNumber = originalNumber + numberToBeAdded;
console.log(newNumber);


// // ------------------------------

let message = "She's a great person!";
let message = 'She\'s a great person!';

// ------------------------------

let visitor = prompt("Siapakah Namamu?");
let message = "hello " + visitor;
message = message + ". Selamat datang di kelas modern javascript. ";
message += "Kita senang sekali kamu berkunjung. ";
message += visitor + ". Terima kasih";
alert(message);


// ------------------------------

let message2 = `Hello ${visitor}. Selamat datang di kelas modern javascript. ${visitor}`;
let message3 = "Hello " + visitor + "Selamat datang di kelas modern javascript. " + visitor;

// ------------------------------

let isOn = false;
let isSleepy = "true";
console.log(typeof isOn);
