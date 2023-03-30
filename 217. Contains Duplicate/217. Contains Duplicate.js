/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const numSet = new Set(nums);
    if(numSet.size === nums.length) return false;
    else return true;
};
