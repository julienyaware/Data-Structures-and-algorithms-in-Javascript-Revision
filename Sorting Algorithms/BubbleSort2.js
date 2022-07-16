// Another way to implement bubble sort.


//Loop through array
//for every value compare with next if the value on right is smaller swap
// swap until  everything is sorted

const bubbleSort = (array) => {
    const arr = array.slice();

    for (let i = 1; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }

    return arr;
}

console.log(bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))

