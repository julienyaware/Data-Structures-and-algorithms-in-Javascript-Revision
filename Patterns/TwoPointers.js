// This displays the two pointers pattern
// Question example :

//Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

//Input: [1, 2, 3, 4, 6], target=6
//Output: [1, 3]

const findPair =(arr,targetSum)=> {
let leftPointer = 0;
let rightPointer = arr.length -1


while(leftPointer < rightPointer){
let currentSum = arr[leftPointer] + arr[rightPointer]

if(currentSum === targetSum){
    return [leftPointer,rightPointer];
}
if(targetSum > currentSum) {
    leftPointer += 1 ;
} else {
    rightPointer -= 1 ;
}
}

return [-1-1] ;
}