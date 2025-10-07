/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const bracket = {
        '}':'{',
        ')':'(',
        ']':'['
    }


for (let ch of s){
    if (ch === '(' || ch === '[' || ch === '{'){
        stack.push(ch)
    }else {
        if (stack.pop() !== bracket [ch]){
            return false
        }
    }
}


return stack.length === 0 ;
}