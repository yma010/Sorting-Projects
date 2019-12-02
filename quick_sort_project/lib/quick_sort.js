function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }

    let pivot = array.shift();
    let lt = array.filter(el => el < pivot);
    let rt = array.filter(el => el >= pivot);

    let sortedLt = quickSort(lt);
    let sortedRt = quickSort(rt);

    return [...sortedLt, pivot, ...sortedRt];
}


module.exports = {
    quickSort
};