/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    //solution1 using twoPointers approach
    let leftPointer = 0;
    let temp;
    let rightPointer = s.length - 1;
    while(leftPointer < rightPointer)
        {
            temp = s[rightPointer];
            s[rightPointer] = s[leftPointer];
            s[leftPointer] = temp;
            leftPointer++;
            rightPointer--;
        }
    return s;
    //solution2
    // return s.reverse();
};
