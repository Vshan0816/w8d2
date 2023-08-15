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
Array.prototype.twoSum = function() {
    let pairs = []
    const that = this

    that.forEach(function(el1, i1) {
        that.forEach(function(el2, i2) {
            if (i1<i2 && el1+el2===0) {
                pairs.push([i1, i2])
            }
        })
    })
    return pairs
};

console.log([-1, 0, 2, -2, 1].twoSum()) // => [[0,4] [2,3]]