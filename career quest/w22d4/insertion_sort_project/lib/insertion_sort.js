function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currElement = arr[i];
        for (var k = i - 1; k >= 0 && currElement < arr[k]; k--) {
            arr[k + 1] = arr[k];
        }
        arr[k + 1] = currElement;
    }
    return arr;
}

module.exports = {
    insertionSort
};