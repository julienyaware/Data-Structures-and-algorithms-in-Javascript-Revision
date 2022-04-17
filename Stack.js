// Implementing a stack as an array . A stack implements last in fast out 

class Stack {
    constructor(){
        //initialize stack as an empty array
        this.stack = []
    }

    // method to add item to the stack
    addToStack(item){
        this.stack.push(item)
    }

    removeFromStack(){
        this.stack.pop()
    }

    printStack(){
        let str = ''
        for(let item of this.stack){
            str += item + '\n'
        }
        return str
    }
}

// Example of implementation

const exampleStack = new Stack()

exampleStack.addToStack('item1')
exampleStack.addToStack('item2')
exampleStack.addToStack('item3')
exampleStack.addToStack('item4')
exampleStack.addToStack('item5')


console.log('Existing items in the stack are as follows:' + exampleStack.printStack())