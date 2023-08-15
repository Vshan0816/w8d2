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

// console.log([1,2,2,3,3,3].uniq()); // => [1,2,3]
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

// console.log([-1, 0, 2, -2, 1].twoSum()); // => [[0,4] [2,3]]

Array.prototype.transpose = function() {
    let grid = new Array(this.length) // [null,null,null]
    const that = this

    for (let i = 0; i < grid.length; i++) {
        grid[i] = new Array(that[0].length)
    }
    
    let row = that.length
    let col = that[0].length

    for (let i1 = 0; i1 < grid.length; i1++) {
        for (let i2 = 0; i2 < that[0].length; i2++) {
            grid[i2][i1] = that[i1][i2]
        }
    }
    return grid
};

console.log([[0, 1, 2], [3, 4, 5], [6, 7, 8]].transpose()) // => [[0,3,6], [1,4,7], [2,5,8]]