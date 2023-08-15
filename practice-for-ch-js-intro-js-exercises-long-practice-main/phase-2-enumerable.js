// Your code here
Array.prototype.myEach = function(callback) {
    const that = this
    for (let i = 0; i < that.length; i++) {
        callback(that[i])
    }
};

// [1,2,3].myEach(function(el) {
//     console.log(el + 1)
// });

// Array.myEach(callback)

// ruby - make function take in an array
// def myFunction(array)

Array.prototype.myMap = function(callback) {
    let that = this
    let new_arr = []
    that.myEach(function(el) { 
        new_arr.push(callback(el))
    })
    return new_arr
};

// callback here is the function passed into myMap which 
// will determine how the el is mapped into the new arr

console.log([1,2,3].myMap(function(el) {
    return el * 2
}));