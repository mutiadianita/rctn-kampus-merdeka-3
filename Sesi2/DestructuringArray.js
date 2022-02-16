const csv = "1997, Ford, f350, Must Sell!";

const [year, make, model,description] = csv.split(","); //memecah menjadi string
const car = csv.split(","); // memasukkan ke dalam array

console.log(year);