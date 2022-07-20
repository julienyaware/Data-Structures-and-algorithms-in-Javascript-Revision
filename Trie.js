class TrieNode {
    constructor(value) {
        this.value = value;
        this.isEnd = false;
        this.children = {} // a letter being a key and values is the rest of the ltters
    }
}

class Trie {
    constructor() {
        this.root = null;
    }


    insert(word) {
        let current = this.root;


        // loop through the word check if it exists if not we will add that new node else if it exists we will get into it 
        for (let character of word) {
            if (current.children[character] === undefined) {
                current.children[character] = new TrieNode(character)
            }
            current = current.children[character];

        }

        current.isEnd = true;

    }

    search(word) {
        let current = this.root;

        for (let character of word) {
            if (current.children[character] === undefined) {
                return false;
            }

            current = current.children[character]
        }

        return current.isEnd;

    }
}

// Testing 

let testData = new Trie()
testData.insert('cat');

testData.search('cat')
