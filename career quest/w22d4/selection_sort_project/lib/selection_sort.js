function swap(arr, index1, index2) {
    let temp1 = arr[index1];
    let temp2 = arr[index2];
    arr[index1] = temp2;
    arr[index2] = temp1;
    return arr;
}

function selectionSort(arr) {
    let lowestVal;
    let leftMostValIndex;
    for (let i = 0; i < arr.length - 1; i++) {
        leftMostValIndex = i;
        lowestVal = arr[i];
        for (let k = i + 1; k < arr.length; k++) {
            if (arr[i] >= arr[k] && arr[k] <= lowestVal) {
                leftMostValIndex = k
            }
        }  
        swap(arr, i, leftMostValIndex);
    }
    return arr;
}

module.exports = {
    selectionSort,
    swap
};