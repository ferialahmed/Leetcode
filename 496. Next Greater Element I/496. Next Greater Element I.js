/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let index = 0;
    let nextElement = 0;
    let greaterElements = []
    for (let i = 0; i<nums1.length;  i++){
        index = nums2.indexOf(nums1[i]);
        for (let j = index+1; j < nums2.length; j++)
        { 
            nextElement = nums2[j];
            if( nextElement > nums1[i] )
            {
                greaterElements.push(nextElement);
                break;
            }
        }
        if (!greaterElements[i])
        {
            greaterElements.push(-1);
        }
            
    }
    return greaterElements;
};
