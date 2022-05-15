/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    
    let source = image[sr][sc];
    if(source === newColor) return image;
    let row = image.length;
    let col = image[0].length;
    recursive(sr, sc);
    return image;
function recursive( r, c)

{
    if(r<0 || r===row || c<0 || c===col) return;
    if(image[r][c] !== source)
    {return;}
    else
    {
        image[r][c] = newColor;
    }
    recursive(r+1, c);
    recursive(r-1, c);
    recursive(r, c+1);
    recursive(r, c-1);
}
 
};
