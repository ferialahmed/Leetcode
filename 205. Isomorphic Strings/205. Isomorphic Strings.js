/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let mapS = new Map();
    let mapT = new Map();
    for (let index = 0; index < s.length; index ++){
        let letterS = s[index];
        let letterT = t[index];
        if(!mapS.has(letterS) && !mapT.has(letterT)){
            mapS.set(letterS, letterT);
            mapT.set(letterT, letterS);
        }
        else{
            
            if (mapS.get(letterS) !== letterT || mapT.get(letterT) !== letterS){
                return false;
            }
        }
        
    }
    return true;
};
