// Your code here
Array.prototype.uniq = function() {
    let new_arr = []

    this.forEach(function(el) {
        if (!new_arr.includes(el)) {
            new_arr.push(el)
        }
    })
    return new_arr
};

// console.log([1,2,2,3,3,3].uniq()) // => [1,2,3]