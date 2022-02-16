let humans = ["Andi", "Budi", "Charlie"];
let human = {
    nama : "Budi",
    umur : 18,
    email : "budi@ganteng.com"
}

console.log(humans[2]);
console.log("email: " + human.email + ". nama: " + human.nama);

//---------------------

// const user = {};
// user.name = "Andi";
// user.handle = "@andiganteng";
// user.location = "Jakarta";

// console.log(user);

//---------------------

// const name = user.name;
// const handle = user.handle;
// const location = user.location;

// const { name, handle, location } = user;

// console.log(name);

const getUser = () => {
    return {
        name: "Andi",
        handle: "@andiganteng",
        location: "Jakarta"
    }
}

// const { name, handle, location } = getUser();
// console.log(typeof getUser());

//-------------------------

const user = {
    n: "Andi",
    h: "@andiganteng",
    l: "Jakarta"
}

const { n: name, h: handle, l: location} = user;

console.log(handle);




