/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var leftIndex, rightIndex, MID ;
var searchInsert = function(nums, target) {
    leftIndex = 0, rightIndex = nums.length-1;
    
    while (leftIndex <= rightIndex)
        {
            MID = Math.floor(leftIndex + (rightIndex - leftIndex)/2);
            
            if (nums[MID] == target) return MID;
            else if (nums[MID] < target)
                {
                    leftIndex = MID + 1;
                    
                }
            else rightIndex = MID - 1;
        }
    return rightIndex + 1;
};
