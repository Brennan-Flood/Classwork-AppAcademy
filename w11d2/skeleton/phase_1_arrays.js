Array.prototype.uniq = function() { 
  let uniqs = []; 
  for(i = 0; i < this.length; i++) {
    if (uniqs.includes(this[i]) === false) { 
      uniqs.push(this[i]); 
    }
  }
  return uniqs; 
}; 

array1 = [1,2,3,4,5,5,5,5,6,6,7,7,8,1,3,3,]
array1.uniq 

Array.prototype.twoSum = function() {
    let twoSums = [];

    for(i = 0; i < this.length; i++) {
        for(j = i + 1; j < this.length; j++) {
            if( this[i] + this[j] === 0) {
                pair = [i, j];
                twoSums.push(pair);
            }
        }
    }
    return twoSums;
};

array2 = [-5, 2, 6, -2, 3, -3]
array2.twoSum



Array.prototype.transpose = function() { 
  let newArr = []; 

  for(i = 0; i < this.length; i++) { 
    subarr = []; 
    for(j = 0; j < this.length; j++) { 
      subarr.push(this[j][i]); 
    }
    newArr.push(subarr); 
  }
  return newArr; 
}

array3 = [[1,2,3], [4,5,6], [7,8,9]]
array3.tranpose 