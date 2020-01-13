function binarySearch(array, target) {
    if (array.length < 1) {
        return false;
    }

    let midIdx = Math.floor(array.length / 2);
    
    if (array[midIdx] === target) {
        return true;
    } else if (array[midIdx] < target) {
        let rightSide = array.slice(midIdx + 1, array.length);
        return binarySearch(rightSide,target)
    } else {
        let leftSide = array.slice(0, midIdx);
        return binarySearch(leftSide, target);
    }
}

function binarySearchIndex(array, target) {
    if (array.length < 1) {
        return -1;
    }

    let midIdx = Math.floor(array.length / 2);

    if (array[midIdx] === target) {
        return midIdx;
    } else if (array[midIdx] < target) {
        let rightSide = array.slice(midIdx + 1, array.length);
        let rightValue = binarySearchIndex(rightSide, target);
        if (rightValue === -1) {
            return -1;
        } else {
            return rightValue + 1 + midIdx
        }
    } else {
        let leftSide = array.slice(0, midIdx);
        return binarySearchIndex(leftSide, target);
    }
}


module.exports = {
    binarySearch,
    binarySearchIndex
};