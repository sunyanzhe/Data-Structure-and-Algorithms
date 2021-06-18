/**
 * 
 * 题目描述：给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
 * 岛屿总是被水包围，并且每座岛屿只能由水平方向或竖直方向上相邻的陆地连接形成。
 * 此外，你可以假设该网格的四条边均被水包围。
 */

/**
 *  示例 1:
    输入:
    11110
    11010
    11000
    00000
    输出: 1
*/

/**
 *  示例 2:
    输入:
    11000
    11000
    00100
    00011
    输出: 3
*/

const numIslands = grid => {
    const moveX = [-1, 0, 1, 0]
    const moveY = [0, -1, 0, 1]
    let col = grid.length,  
        row = grid[0].length,
        count = 0;
    function dps(grid, i, j) {
        if (i < 0 || j < 0 || i >= col || j >= row || grid[i][j] === '0') return
        grid[i][j] = '0'
        for (let k = 0; k < 4; k++) dps(grid, i + moveX[k], j + moveY[k])
    }
    for (let i = 0; i < col; i++) {
        for (let j = 0; j < row; j++) {
            if (grid[i][j] === '1') {
                dps(grid, i, j)
                count++
            }
        }
    }
    return count
}