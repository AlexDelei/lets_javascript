/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    const initial = init
    let incInit = init

    /* An object in js is a dictionary
    * So i will return a dictionary with the
    * three functions in it
    */

    return {
        increment: function() {
            return incInit += 1;
        },
        decrement: function() {
            return incInit -= 1;
        },
        reset: function() {
            incInit = initial
            return initial;
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */