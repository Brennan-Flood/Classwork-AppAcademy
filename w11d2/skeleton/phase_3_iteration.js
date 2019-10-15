Array.prototype.bubbleSort = function(callBack) {
  let sorted = false; 

  while (sorted === false) {
    sorted = true; 
    for(i = 0; i < this.length-1; i++) {
      if (callBack(this[i], this[i+1]) === 1) {
        temp = this[i]; 
        this[i] = this[i+1]; 
        this[i+1] = temp; 
        sorted = false; 
      }
    }
  }
  return this; 
}; 

function callBack5(num1, num2) { 
  if (num1 > num2) { 
    return 1 
  } else if (num2 > num1) {
    return -1
  } else {
    return 0
  }; 
}; 

array5 = [7,8,4,3,5,3,2,4,5,8,9,7,1,4,5,6,7]; 
array5.bubbleSort(callBack5); 

String.prototype.substrings = function() {
  let subStrings = []; 

  for (i = 0; i < this.length; i++) {
    for (j = i; j < this.length; j++) {
      subString = this.substring(i, j + 1);
      subStrings.push(subString);
    }
  }
  return subStrings; 
};

string1 = "Hello World"; 
string1.substrings; 