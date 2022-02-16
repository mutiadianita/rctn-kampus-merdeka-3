// Using bind(this);

// function Person() {
//     this.age = 0;

//     setInterval(function() {
//         this.age++;
//         console.log(this.age);
//     }.bind(this),1000)
// }

// const p = new Person()

// Using that alias
// function Person() {
//     this.age = 0;
//     const that = this;
//     setInterval(function() {
//         that.age++;
//         console.log(that.age);
//     },1000)
// }


// const p = new Person()

// Using Arrow Function
function Person() {
    this.age = 0;
    setInterval(() => {
        this.age++;
        console.log(this.age);
    },1000)
}


const p = new Person()