const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan (el1, el2, callback) {
  reader.question(`Is ${el1} greater then ${el2}? Please enter yes/no`, function (answer) {
    if (answer === 'yes') {
        callback(true);
    } else if (answer === 'no') {
        callback(false); 
    }
  }) 
};

// askIfGreaterThan(20, 5, value => console.log(value));


function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    if (i < arr.length - 1) {
      askIfGreaterThan(arr[i], arr[i + 1], function (isGreaterThan) { 
           if (isGreaterThan) {
               let temp = arr[i];
               arr[i] = arr[i + 1];
               arr[i + 1] = temp;
               madeAnySwaps = true;     
           }
            console.log(`${arr}`);
            innerBubbleSortLoop(arr, (i + 1), madeAnySwaps, outerBubbleSortLoop);  
        });
    } else if (i === (arr.length - 1)) {
      outerBubbleSortLoop(madeAnySwaps);
    }
};


function absurdBubbleSort (arr, sortCompletionCallback) {
    
  function outerBubbleSortLoop (madeAnySwaps) {
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
      return;
    }
  };
  outerBubbleSortLoop(true);
};

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
 
