// let orders = [
//     {total: 325},
//     {total: 512},
//     {total: 128},
//     {total: 32},
// ];

// let total = 0;
// for (let i=0; i<orders.length; i++) {
//     total = total + orders[i].total;
// }

// let total = orders.reduce((total, order) => total + order.total, 0);
// console.log(total);



const names = ['Budi', 'Dewi', 'Santoso'];
// We set initialValue to ''
// because we want greetAll to return a string
const greetAll = names.reduce(function (greeting, name) {
    greeting += ' ' + name;
    return greeting;
}, 'Hai,');
console.log(greetAll);