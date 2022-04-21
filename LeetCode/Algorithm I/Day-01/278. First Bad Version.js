/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */

var left, right, MID;
var solution = function(isBadVersion) {
    
    return function(n) {
        left = 1, right = n;
        
        while(left <= right)
            {
                MID = Math.floor(left + (right - left)/2);
                
                if (isBadVersion(MID) )
                    {
                         right = MID - 1;  
                    }
                else left = MID + 1;  
                
            }
        return left ;
    };
};
