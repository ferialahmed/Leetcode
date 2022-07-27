/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let leftPointer = 0;
    let rightPointer = nums.length - 1;
    while (leftPointer < rightPointer)
        {
            if(nums[leftPointer] === 0)
                {
                    
                    nums.push(nums.splice(leftPointer,1));
                }
            else{leftPointer++};
        }
   
    return nums;
};