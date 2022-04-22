/**
 * @param {number[]} nums
 * @return {number[]}
 */


var sortedSquares = function(nums) {
    for (let el = 0; el < nums.length; el++)
        {
            nums[el] = Math.pow(nums[el],2);   
        }
    nums.sort(function(firstNum, secNum) //compareFunction to sort elements without converting them to strings
              {
                return (firstNum - secNum);
              });
    return nums
}
