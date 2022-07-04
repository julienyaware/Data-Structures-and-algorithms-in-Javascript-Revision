//Another way to implement a stack with peek function and getlength of stack function

class Stack {
    constructor(){
        this.data = [];
        // tracks number of elements in stack
        this.top = 0 ;
    }

    add(value){
        this.data[this.top ++] = value ;
    }

    peek (){
        this.data[this.top - 1];
    }

    remove (){
      return this.data[-- this.top]
    }

    getLength (){
        return this.top ;
    }
}