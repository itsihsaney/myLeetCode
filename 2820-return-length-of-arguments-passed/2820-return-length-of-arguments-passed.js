/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    let getLength = args.length
    return getLength
};

/**
 * argumentsLength(1, 2, 3); // 3
 */