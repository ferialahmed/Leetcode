/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const numSet = new Set(nums);
    const outPut = [];
    for (let num = 1; num <= nums.length; num++){
        if (!numSet.has(num)) outPut.push(num);
    }
    return outPut;
};
