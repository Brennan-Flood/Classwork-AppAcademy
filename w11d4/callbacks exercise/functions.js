const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers (sum, numsLeft, completionCallback) {
  if (numsLeft === 0) {
    completionCallback(sum);
    reader.close();
  } else {
    reader.question("Please enter a number", function (response) {
      const number = parseInt(response);

      sum += number;
      console.log(`Current Sum: ${sum}`)
      addNumbers(sum, (numsLeft - 1), completionCallback);
    });  
};
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
