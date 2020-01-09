function swap(array, idx1, idx2) {
    let temp1 = array[idx1];
    let temp2 = array[idx2];
    array[idx1] = temp2;
    array[idx2] = temp1;
    return array;
}

function bubbleSort(array) {
    let sorted = false;

    while (!sorted) {
        sorted = true;
        for ( let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                let temp1 = array[i];
                let temp2 = array[i + 1];
                array[i] = temp2;
                array[i + 1] = temp1;
                sorted = false;
            }
        }
    }

    return array;
}


module.exports = {
    bubbleSort,
    swap
};