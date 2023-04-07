/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // const s_Sorted = s.split('').sort().join('');
    // const t_Sorted = t.split('').sort().join('');
    // if(s_Sorted === t_Sorted){
    //     return true;
    // }
    // return false

  
  //Another solution with better Time complexity
  
    let map = new Map();
    for (let letter of s){
        map.set(letter, (map.get(letter)||0)+1);
    }
    for (let letter of t){
        if(map.has(letter))
        {
            map.set(letter, (map.get(letter))-1);
            if(map.get(letter) === 0){
                map.delete(letter);
            }
        }
        else{
            return false;
        }
    }
    if (map.size === 0) return true
    return false

};
