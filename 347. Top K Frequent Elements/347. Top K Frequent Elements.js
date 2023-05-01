/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();
    // let mostFreq = [];
    for (let number of nums){
        if (map.has(number)){
            map.set(number, map.get(number) + 1)
        }else{
            map.set(number, 1)
        }
    }
    let sortedMap = [...map.keys()].sort((a,b) => map.get(b) - map.get(a));
    
    let mostFreq = sortedMap.slice(0, k);
    return mostFreq;
};
