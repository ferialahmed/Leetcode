/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
   let splittedSentence = s.split(" ");
   let index = 0;
    while(index < splittedSentence.length)
        {
            // console.log(splittedSentence[index]);
           splittedSentence[index] = splittedSentence[index].split("").reverse().join("");
            index++;
        }
    return splittedSentence.join(" ");
    
};