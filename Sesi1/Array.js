let bahasaPemrograman = ["Ruby", "Python", "Java", 1, true]; // Array 5 data, index 0, index 1, ...

let fruits = ["anggur", "melati", "apel", "mangga"];
let buah_buahan = ["cherry", "sirsak", "durian"];

buah_buahan.push.apply(buah_buahan, fruits);
fruits.splice(1, 2);
console.log(fruits);

let arr1 = ["a", "b", "c"];
let arr2 = arr1; // Refference arr2 adalah arr1
// arr1 = []; // method ini refference tidak ikut kosong
arr1.splice(0, arr1.length); // method mengosongkan ini, refference ikut kosong

console.log(arr2);

let multidimensionArray =
    [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]

