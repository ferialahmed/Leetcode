/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const arrSize = nums.length;
    const majority = Math.floor(arrSize/2);
    let numMap = new Map();
    for (let num of nums){
        if (numMap.has(num)){
            numMap.set(num, numMap.get(num)+1)
        }
        else {
            numMap.set(num, 1);
        }
           if (numMap.get(num) > majority ) {return num};
    }
};
