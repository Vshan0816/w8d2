// Your code here
Array.prototype.myEach = function(callback) {
    const that = this
    for (let i = 0; i < that.length; i++) {
        callback(that[i])
    }
};


[1,2,3].myEach(function(el) {
    console.log(el + 1)
});

Array.myEach(callback)

// ruby - make function take in an array
// def myFunction(array)