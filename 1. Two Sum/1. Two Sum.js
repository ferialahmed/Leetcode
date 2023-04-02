/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numsMap = new Map();
    for (let num = 0; num < nums.length; num++)
    {
        let diff = target - nums[num];
        if(numsMap.has(diff)) return [ numsMap.get(diff), num];
        numsMap.set(nums[num], num);
    }
};
