// Work through this problem on https://leetcode.com/problems/climbing-stairs/ and use the specs given there.
// Feel free to use this file for scratch work.

function climbStairs(n) {
  let table = new Array(n);
  if (n === 1) {
    return 1;
  }

  if (n === 2) {
    return 2
  }

  table[0] = 1;
  table[1] = 2;
  for (i = 2; i < n; i++) {
    table[i] = table[i - 1] + table[i - 2];
  }

  return table[table.length - 1];
}