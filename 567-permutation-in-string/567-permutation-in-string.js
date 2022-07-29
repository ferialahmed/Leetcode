/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  
   let leftPointer = 0, rightPointer = 0;
    let freq = {};
    strLength = s1.length;
    for (let char = 0; char<s1.length; char++)
        {
            freq[s1[char]] = (freq[s1[char]] || 0) + 1;
        }
    while(rightPointer < s2.length)
        {
            if(freq[s2[rightPointer]] > 0)
                {
                    strLength--;   
                }
            freq[s2[rightPointer]]--;
            rightPointer ++;
            
            if(strLength == 0) return true;
            if(rightPointer - leftPointer == s1.length)
                {
                    if(freq[s2[leftPointer]] >= 0)
                        {
                            strLength ++;
                        }
                    freq[s2[leftPointer]] ++;
                    leftPointer ++;
                }
        }
    return false;
    
};