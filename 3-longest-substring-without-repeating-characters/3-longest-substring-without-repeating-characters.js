/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let pointer = 0, maxLength = 0;
    let str = "";
    while (pointer < s.length)
        {
            if (!s.includes(s[pointer]))
                {
                    str+=(s[pointer]);
                }
            else 
                {
                    if (maxLength < str.length)
                        {
                            maxLength = str.length;
                            
                        }
                    str=str.substring(str.indexOf(s[pointer])+1) + s[pointer];
                }
            pointer ++;
        }
    return maxLength > str.length?maxLength : str.length;
};