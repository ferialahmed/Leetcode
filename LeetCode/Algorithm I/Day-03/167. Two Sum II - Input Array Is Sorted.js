/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
   
    let leftPointer = 0;
    let rightPointer = numbers.length - 1;
    while (rightPointer > leftPointer)
        {
            if (numbers[rightPointer] + numbers[leftPointer] > target)
                {
                    rightPointer--;
                }
            else if(numbers[rightPointer] + numbers[leftPointer] < target)
                {
                    leftPointer++;
                }
            else 
            {
                return [leftPointer+1, rightPointer+1];
            }
        }
    
};
