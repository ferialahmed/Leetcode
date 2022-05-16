var maxAreaOfIsland = function(grid) {
    let max = 0, area = 0, result = 0;
    let row = grid.length;
    let col = grid[0].length;
    for (let sr = 0; sr<row; sr++)
            {
                for (let sc = 0; sc < col; sc++)
                    {
                        if(grid[sr][sc] === 1)
                            {
                                area = 0;
                                result = Max(sr,sc);
                                max = Math.max(result, max);
                            }
                    }
            }
    function Max(r, c)
    {
        if(r<0 || r===row || c<0 || c===col) return;
        if(grid[r][c] !== 1) return;
        grid[r][c] = 0;
        area+=1;
        Max(r+1,c);Max(r-1,c);Max(r,c+1);Max(r,c-1);
        return area;
    }
    return max;
};
