function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++){
        let temp = arr[i]
        for (var j = i-1; j >= 0 && temp < arr[j]; j--){
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = temp;
    }

    return arr;
}

module.exports = {
    insertionSort
};