// Solution of getting the factorial of n using recursion

const getFactorial = (n) => {
    // base case 
    if (n === 0) {
        return 1
    }
    return n * getFactorial(n - 1)
}