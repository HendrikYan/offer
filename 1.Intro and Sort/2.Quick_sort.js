//https://hackernoon.com/programming-with-js-merge-sort-deb677b777c0
function mergeSort(array) {
    if(array.length === 1) {
        return array;
    }
    var middle = Math.floor(array.length / 2);
    var left = array.slice(0, middle);
    var right = array.slice(middle);
    return sort(mergeSort(left), mergeSort(right));
}
function sort(leftArray, rightArray) {
    var sortedArray = [];
    var leftI = 0;
    var rightI = 0;
    while(leftI < leftArray.length && rightI < rightArray.length) {
        if(leftArray[leftI] < rightArray[rightI]) {
            sortedArray.push(leftArray[leftI]);
            leftI++;
        } else {
            sortedArray.push(rightArray[rightI]);
            rightI++;
        }
    }
    sortedArray = sortedArray.concat(leftArray.slice(leftI)).concat(rightArray.slice(rightI));
    return sortedArray;
}
var testArray = [1,5,23,100,2,4,5,6,2,4,5,6,7,8,9,0,-2];
console.log(mergeSort(testArray));

