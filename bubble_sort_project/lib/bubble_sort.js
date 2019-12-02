function swap(array, idx1, idx2) {

    temp = array[idx2]
    array[idx2] = array[idx1]
    array[idx1] = temp
    return array;
}


function bubbleSort(array) {
    let isSorted = true;

    while (isSorted){
        isSorted = false;

        for(let i = 0; i < array.length - 1; i++){
            if (array[i] > array[i + 1]){
                swap(array, i, i + 1);
                isSorted = true;
            }
        }
    }
    return array;
}


module.exports = {
    bubbleSort,
    swap
};