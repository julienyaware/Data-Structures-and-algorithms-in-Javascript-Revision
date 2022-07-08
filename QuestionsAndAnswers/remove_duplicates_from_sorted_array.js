/*Given an array of sorted numbers, remove all duplicate number instances from it in-place, 
such that each element appears only once. The relative order of the elements should 
be kept the same and you should not use any extra space so that that the solution have
 a space complexity of O(1) */

 const exampleArray = [2,3,3,4,5,6,6,7] ;


const removeDuplicates = (arr)=> {
    let i = 0 ;
    let nextNonDuplicates = 1;

    while (i < array.length){
        if(arr[nextNonDuplicates - 1] !== arr[i]){
            arr[nextNonDuplicates] = arr[i];
            nextNonDuplicates += 1;
        }
        i += 1;
    }

    return nextNonDuplicates
}