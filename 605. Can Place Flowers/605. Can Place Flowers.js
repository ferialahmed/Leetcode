/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    if (n === 0) return true;
    for (let index = 0; index <= flowerbed.length-1; index ++){
       if (flowerbed[index] === 0 && flowerbed[index-1] !== 1 && flowerbed[index+1] !== 1  ){
                n--;
                flowerbed[index] = 1;
                
        }
        if(n === 0) {return true}
    }
    return false;
};
