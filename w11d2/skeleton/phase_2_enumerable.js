Array.prototype.myEach = function(cb) {

    for(i=0; i < this.length; i++) {
        cb(this[i]);
    }
};

array4 = [1, 2, 3, 4]
function callBack(num) {
   console.log(num);
};

Array.prototype.myMap = function (cb) {
  let newArr = [];
  for (i = 0; i < this.length; i++) {
    newArr.push(cb(this[i]));
  }
  return newArr; 
};

function callBack2(num) {
  return num * 2; 
};

Array.prototype.myReduce = function(callBack, initialValue) {
    let array = this;

    if (initialValue == undefined) {
        initialValue = this[0];
        array = this.slice(1);
    }
    let accumulator = initialValue;
  array.myEach(el => accumulator = callBack(accumulator, el));
  return accumulator;
};

function callBack3(num1, num2) { 
  return num1 + num2; 
};