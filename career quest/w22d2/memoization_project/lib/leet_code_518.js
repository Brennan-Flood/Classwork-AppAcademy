// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

// const arrSum = arr => arr.reduce((a, b) => a + b, 0)

// var change = function (amount, coins) {

//   let output = [];
//   let currentIteration;

//   coins.forEach((coin) => {
//     currentIteration = [coin];
//     let testCoins = [];
//     for (i = 0; i < coins.length; i++) {
//       if (coins[i] <= coin) {
//         testCoins.push(coins[i]);
//         console.log(testCoins);
//       }
//     }
//     if (amount - coin === 0) {
//       return currentIteration;
//     } else if (amount - coin > 0) {
//       let nextIteration = change(amount - coin, testCoins);
//       currentIteration = [coin].concat(nextIteration);
//       if (arrSum(currentIteration) === amount) {
//         output.push(currentIteration);
//       } else if (arrSum(currentIteration.concat(nextIteration)) === amount){ 
//         output.push(currentIteration.concat(nextIteration));
//       }
//     } else {
//       return [];
//     }
//   });
//   console.log("amount: ", amount, "output: ",  output, "current Iter: ", currentIteration)
//   if (output.length > 1) {
//     return output;
//   } else {
//     return currentIteration;
//   }
// };

// console.log("return val:", change(5, [1,2,5]));

var change = function (amount, coins) {

  let output = 0;
  let currentIteration;

  coins.forEach((coin) => {
    currentIteration = [coin];
    let testCoins = [];
    for (i = 0; i < coins.length; i++) {
      if (coins[i] <= coin) {
        testCoins.push(coins[i]);
      }
    }
    if (amount - coin === 0) {
      output += 1;
    } else if (amount - coin > 0) {
      let nextIteration = change(amount - coin, testCoins);
      output += nextIteration;
    }
  });
  return output
};

console.log("return val:", change(20, [1, 2, 5]));

