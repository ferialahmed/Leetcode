/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    s.reverse();
    return s;
    // let leftPointer = 0;
    // let rightPointer = s.length - 1;
    // while(leftPointer < rightPointer)
    //     {
    //         [s[leftPointer], s[rightPointer]] = [s[rightPointer], s[leftPointer]];
    //         leftPointer ++;
    //         rightPointer --;
    //     }
    // return s;
};