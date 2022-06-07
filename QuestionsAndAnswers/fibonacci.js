// Get the nth value of a fibonacci

const getFib = (n)=> {
    let sum = 0
    let lastValue = 1
    let valueBeforeLastValue = 0

    if (n <= 1){
        return n
    }

    for(let i = 2 ;i <n ; i++){
      sum = lastValue + valueBeforeLastValue
      valueBeforeLastValue = lastValue
      lastValue = sum
    }

    return sum
}


// Get the all the values of the fibonacci series before value n

const getFibSeries = (n)=> {
    let result = [0,1]
    if (n === 1 ){
    return result
    }
    for(let i =2;i<n ; i++){
    result[i] = result[i-2] + result[i-1]
    }
    return result
    }
    
    console.log(getFib(10))