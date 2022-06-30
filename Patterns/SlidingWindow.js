// Given an array, find the average of all subarrays of ‘K’ contiguous elements in it.

// Use the sliding window.



const compute_average_of_subarrays = (k, arr) => {
    let windowStart = 0;
    let result = [];
    let windowSum = 0.0;
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd];
        if (windowEnd >= k - 1) {
            result.push(windowSum / k);
            windowSum -= arr[windowStart];
            windowStart++;
        }
    }
    return result;
}


const result = compute_average_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
console.log(`Averages of subarrays of size K: ${result}`);