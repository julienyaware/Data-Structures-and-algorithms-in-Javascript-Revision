// Implementing queue as an array that follows the First In First Out method

class Queue {
    constructor () {
        this.queue = []
    }

    enqueue(item){
        this.queue.push(item)
    }

    dequeue(){
        this.queue.shift()
    }

    printQueue() {
        let str = ''
        for(let item of this.queue){
           str += item + '\n'
        }
        return str
    }

}

//Example of Implementation

const exampleQueue = new Queue()

// Add items to the queue
exampleQueue.enqueue('item1')
exampleQueue.enqueue('item2')
exampleQueue.enqueue('item3')
exampleQueue.enqueue('item4')
exampleQueue.enqueue('item5')


console.log('the items waiting in the queue are as follows' + '\n' + exampleQueue.printQueue())