/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    // solution 1
    // return nums.unshift(...nums.splice(-k % nums.length));
  
    ////////////////////////////////////////////////////////////
  
    // solution 2 
    k = nums.length - k%nums.length;
    let copiedArr = [...nums]
    for(let pointer = 0; pointer < nums.length; pointer++)
    {
        if(k === nums.length)
        {
            k=0;
        }
        nums[pointer] = copiedArr[k];
        k++;
    }
    return nums;
};
