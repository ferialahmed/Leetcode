/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let splittedString = s.split();
    let reversedString = [];
    for(let item of s.split(" ") ) 
        {
           reversedString.push( item.split("").reverse().join(""));
        }
    
    return reversedString.join(" ");
   
   
};
