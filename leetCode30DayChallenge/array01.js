// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    /**
     * return a new array with a transformation
     * so ill loop through the array elements,
     * then pass in both the element its index
     * to the fn function, plus this is stored inside an array
     * named array. At the end of the loop, return the new array
     */
     const array = [];
     for (let i = 0; i < arr.length; i++) {
        array[i] = [fn(arr[i], i)]
     }
     
     return array
};