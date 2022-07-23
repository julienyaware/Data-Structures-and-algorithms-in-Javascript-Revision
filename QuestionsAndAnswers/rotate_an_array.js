// Given an array [1,2,3,4,5,6] rotated with k=3 elements

// BruteForce

const rotateArray = (arr,k) => {
 for(let i=0; i<k; i++){
   arr.unshift(arr.pop())  
 }
}