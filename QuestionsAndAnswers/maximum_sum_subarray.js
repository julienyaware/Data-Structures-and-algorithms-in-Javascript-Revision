// max_sub_array_of_size_k

// Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.
// Example
// Input: [2, 1, 5, 1, 3, 2], k=3 
// Output: 9


const getMaxSumOfSubArray = (k,arr)=> {
    let windowSum = 0;
    let maxSum = 0;
    let startOfWindow = 0;

    for(let windowEnd = 0; windowEnd < arr.length ; windowEnd++) {
        windowSum += arr[windowEnd];

        if(windowEnd > k-1){
        maxSum = Math.max(maxSum,windowSum);
        windowSum -= arr[startOfWindow];
        startOfWindow += 1 ;
        }
    }

    return maxSum;

}