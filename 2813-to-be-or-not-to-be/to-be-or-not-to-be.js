/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    let object = {
        toBe : function(otherVal){
           if (otherVal === val) return true 
           else if (null === val) throw new Error ("Not Equal")  
           else throw new Error ("Not Equal") 
           
        },
        notToBe : function(otherVal){
           if (otherVal !== val) return true 
           else if (null === val ) return true
           else throw new Error ("Equal")  
        }
    }
    return object
 };

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */