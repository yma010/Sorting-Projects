const getDigit = (num, place) => Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
const getInt = (num) => (num === 0) ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;

function getMax(nums) {
    let max = 0;
    for( let i = 0; i < nums.length; i++){
        max = Math.max(max, getInt(nums[i]));
    }
    return max;
}

function radixSort(arr) {
    if (!Array.isArray(arr)){
        return null;
    }

    let max = getMax(arr);

    for( let j = 0; j < max ; j++) {
        let buckets = Array.from({ length: 10}, () => []);

        for ( let k = 0; k < arr.length; k++ ) {
            let digi = getDigit(arr[j], k);
            buckets[digi].push(arr[j])

        }
        arr = [].concat(...buckets);
    }
    return arr;
}

module.exports = {
    radixSort
};