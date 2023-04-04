/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let rightSum = 0;
    let leftSum = 0;

    for (let index = 0; index < nums.length; index ++){
        rightSum += nums[index];
    }

    for (let index = 0; index < nums.length; index ++){ 

        if(((rightSum - nums[index]) / 2) !== leftSum ) 
        {
            leftSum += nums[index];
            continue;
        }
            return index
    }
    
   return -1
};
