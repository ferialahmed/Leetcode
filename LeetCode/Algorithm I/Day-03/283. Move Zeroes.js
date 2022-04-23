/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
   let index = 0;
   while (index < nums.length)
   {
       if (nums[index] === 0)
           {
               nums.push(nums.splice(index,1));
           }
       else
           {
               index++;
           }
   }
   
};
