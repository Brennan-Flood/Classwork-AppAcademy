function range(start, end) {
  if (start === end ) {
    return [start]; 
  } 
    newArr = range(start, end - 1);
    newArr.push(end);
    return newArr;
}; 

function sumRec(array) {

    if (array.length <= 1) {
        return array[0];
    }
    let sum = 0; 
    sum = array[0] + sumRec(array.slice(1));
    return sum;
}; 

function exponent(base, exp) {
  if (exp === 0) {
    return 1; 
  }
  if (exp === 1) {
    return base; 
  }
  if (exp > 0) {
    results = base * exponent(base, exp-1); 
  } else {
    results = (1.0/base) * exponent(base, exp+1);
  }; 
  return results; 
};

function fibonacci(n) {
    if (n === 0) {
        return [];
    }
    if (n === 1 ) {
        return [1];
    }
    if (n === 2) {
        return [1, 1];
    }

    sequence = fibonacci(n-1);
    newNum = sequence[n-3] + sequence[n-2];
    sequence.push(newNum);
    return sequence;
};

function deepDup(arr) {
  if ( !(arr instanceof Array)) {
      return arr;
  }

  return arr.map(el => deepDup(el))
};

dupeArray = [[1, 2], [[3], 4]]

function bsearch(arr, target) {
  if (arr.length === 0) {
    return -1;  
  };

  let mid_idx = Math.floor(arr.length/2);

  let left = arr.slice(0, mid_idx);
  let right = arr.slice(mid_idx, arr.length - 1);

  if (arr[mid_idx] === target) {
    return mid_idx;
  } else if (arr[mid_idx] > target) {
    return bsearch(left, target); 
  } else {
    const result = bsearch(right, target)
    if (result == undefined) {
      return -1;
    } else {
      return result + mid_idx + 1; 
    }
  }
};

array6 = [1, 2, 5, 7, 10, 20, 100]

function merge(left, right) {
    let sorted = []

    while (left.length > 0 && right.length > 0) {

    }

    return sorted + left + right
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let midIdx = Math.floor(arr.length/2)

    let sortedLeft = mergeSort(arr.slice(0, midIdx))
    let sortedRight = mergeSort(arr.slice(midIdx, arr.length - 1))

    merge(sortedLeft, sortedRight)
}