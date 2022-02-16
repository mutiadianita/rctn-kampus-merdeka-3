console.log(this);

let counter = {
    val: 9,
    increment: function () {
        return this.val+= 1;
    }
}

console.log(counter.increment());
