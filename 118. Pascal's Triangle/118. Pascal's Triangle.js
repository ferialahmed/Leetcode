/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let res = [];

    for (let row = 0; row < numRows; row++){
        let rows = new Array(row+1);
        res.push(rows);
        for (let col = 0; col <= row; col++){
            if(col === 0 || col === row){
                res[row][col] = 1;
            }
            else{
                res[row][col] = res[row-1][col-1] + res[row-1][col];
            }
        }
    }
    return res;
};
