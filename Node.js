// This is a fundamental building block to many data structures.
// It mostly contains data and a link to the next node 


class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }

    setNextNode(node) {
        // Check if whatever is passed as a node is actually a node
        if (!(node instanceof Node)) {
            throw new Error('Please ensure next node is an instance of node class')
        }

        this.next = node
    }

    setNext(data) {
        this.next = data
    }

    getNextNode() {
        return this.next;
    }
}

module.exports = Node