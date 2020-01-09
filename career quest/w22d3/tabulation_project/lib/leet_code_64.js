// Work through this problem on https://leetcode.com/problems/minimum-path-sum/ and use the specs given there.
// Feel free to use this file for scratch work.

function minPathSum(grid) {
 
    if (grid.length === 0) {
      return 0;
    }

    let m = grid.length;
    let n = grid[0].length;

    let table = new Array(m);

    for (let i = 0; i < table.length; i++) {
      table[i] = new Array(n);
    }

    let sum = 0;
    for (let i = 0; i < m; i++) {
      sum += grid[i][0];
      table[i][0] = sum;
    }
    sum = table[0][0]
    for (let i = 1; i < n; i++) {
      sum += grid[0][i];
      table[0][i] = sum;
    }

    for (let i = 1; i < m; i++) {
      for (let k = 1; k < n; k++) {
        table[i][k] = grid[i][k] + Math.min(table[i - 1][k], table[i][k - 1])
      }
    }

    return table[m - 1][n - 1]

}