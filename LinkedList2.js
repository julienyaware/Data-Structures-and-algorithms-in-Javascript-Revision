// Another way to implement a linked list

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(data) {
        this.head = new Node('head')
        this.length = 0;
    }

    findItem(item) {
        let currentNode = this.head;
        while (currentNode.value != item) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    addItemAfterASpecificItem(additionalItem, itemToBeAddedAfter) {
        const newItem = new Node(additionalItem)
        const nodePostionForAddition = findItem(itemToBeAddedAfter);
        if (!nodePostionForAddition) {
            newItem.next = nodePostionForAddition.next
            nodePostionForAddition.next = newItem;
        }
    }

    addItemAtBeginning(item) {
        const newNode = new Node();
        newNode.next = this.head.next;
        this.head.next = newNode;
    }

    showItems() {
        let currentNode = this.head;
        while (currentNode.next != null) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }


    }

