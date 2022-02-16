const animals = [
    {name: "Fluffy", species: "cat"},
    {name: "Carlo", species: "dog"},
    {name: "Nemo", species: "fish"},
    {name: "Hamilton", species: "dog"},
    {name: "Dory", species: "fish"},
    {name: "Ursa", species: "cat"},
];

// let fish = [];
// for(let i = 0; i<animals.length; i++) {
//     if (animals[i].species === "fish") {
//         fish.push(animals[i]);
//     }
// }

let fish = animals.filter((data)=> data.species==="fish");
console.log(fish);