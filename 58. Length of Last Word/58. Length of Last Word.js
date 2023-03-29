/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const newString = s.trim();
    const lastWord = newString.split(' ').pop();
    return lastWord.length; 
};
