class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }


    insertNode(value) {
        const n = new Node(value);
        let current;
        if (this.root === null) {
            this.root = n;
            current = this.root
        } else {
            current = this.root;
            while (current) {
                if (data < current.value) {
                    if (current.left === null) {
                        current.left = n;
                        break;
                    }
                    current = current.left
                } else if (data > current.value) {
                    if (current.right === null) {
                        current.right = n;
                        break;
                    } else {
                        current = current.right;
                    }

                }
            }

        }
        while (current) {

        }
    }
}
