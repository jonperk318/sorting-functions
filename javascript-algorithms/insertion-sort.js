/*
INSERTION SORT: each element is checked and put in its proper place in the sorted array
Time complexity:
    best case: O(n) (already sorted)
    average case: O(n^2)
    worst case: O(n^2)
Space complexity: O(1)
Stable
*/

function insertionSort(arr) {

    for (let i = 1; i < arr.length; i++) { // skip the 0th index

        const key = arr[i];
        let j = i - 1; // insert arr[i] into the sorted sequence arr[1] to arr[j-1]

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--; // decrement j until it finds a smaller number or it's the first index of the array
        }
        arr[j + 1] = key;
    }

    return arr;

}

module.exports = insertionSort;