var middle;
var leftIndex, rightIndex;
var search = function(nums, target) {
    
    //solution 1
    leftIndex = 0;
    rightIndex = nums.length - 1; 
    while (leftIndex <= rightIndex)
        {
             middle = Math.floor(leftIndex + (rightIndex - leftIndex)/2); 
             if(nums[middle] == target)
                 {
                     return middle;
                 }
            else if(nums[middle] > target)
                {
                    rightIndex = middle - 1;
                }
            else
                {
                    leftIndex = middle + 1;
                }
        }
    return -1
    
    
    //solution 2
    //return nums.indexOf(target);
};
