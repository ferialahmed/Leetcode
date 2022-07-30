/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let maximum = 0, res = 0, area = 0, sr = 0, sc = 0;
    const rows = grid.length;
    const cols = grid[0].length;
    for (let sr =0; sr< rows; sr++)
    // while (sr < rows)
        {
            for (let sc = 0; sc < cols; sc++)
            // while (sc < cols)
                {
                    if (grid[sr][sc] === 1)
                        {
                            area = 0;
                            res = Max(sr,sc);
                            maximum = Math.max(res, maximum);
                        }
                    // sc ++;
                }
            // sr ++;
            // sc = 0;
        }
    function Max (r, c)
    {
        if (r === rows || r < 0 || c === cols || c < 0) return;
        if (grid[r][c] !== 1) return;
        grid[r][c] = 0;
        area ++;
        Max(r+1, c); Max(r-1, c);
        Max(r, c+1); Max (r, c-1);
        return area;
    }
    return maximum;
};