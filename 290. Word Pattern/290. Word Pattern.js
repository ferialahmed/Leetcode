/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let map = new Map();
    let sentence = s.split(' ');
    if(new Set(pattern).size !== new Set(sentence).size) return false;
    if(pattern.length !== sentence.length) return false;

    for (let index = 0; index < pattern.length; index++ )
    {
        if (map.has(pattern[index]))
        {
            if((map.get(pattern[index]) !== sentence[index]))
            {
                return false;
            }
        }
        else
        {
            map.set(pattern[index], sentence[index])
        }
    }
    return true;
};
