/* Given an unsorted array of numbers and a target ‘key’, 
remove all instances of ‘key’ in-place and return the new length of the array. 

Input: [3, 2, 3, 6, 3, 10, 9, 3], Key=3
Output: 4
Explanation: The first four elements after removing every 'Key' will be [2, 6, 10, 9].
*/

const remove_instances_of_key = (arr,key)=> {
let element = 0
for(let i=0; i< arr.length ; i++) {
    if(arr[i] !== key){
        arr[element] = arr[i]
        element += 1
    }
}
return element ;
}