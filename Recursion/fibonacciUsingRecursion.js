const getFib = (n) =>{
    // base case 
    if(n <2){
        return n;
    }

    return getFib(n-1) + getFib (n-2) ; 
}