/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const source = image[sr][sc];
    const rows = image.length;
    const cols = image[0].length;
    if (source === color) return image;
    recursive (sr,sc);
    return image;
    
    function recursive (row,col)
    {
        if(row===rows || row<0 || col===cols || col <0) return;
        if (image[row][col] !== source) return;
        else
            {
                image[row][col] = color;
            }
        recursive(row+1,col);
        recursive(row-1,col);
        recursive(row,col+1);
        recursive(row,col-1);
    }
};