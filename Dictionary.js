// Implementation of a simple dictionary

class Dictionary {
    constructor() {
        this.dataStore = new Array();
    }

    addItem(key, value) {
        this.dataStore[key] = value;
    }

    findItem(key) {
        return this.dataStore[key];
    }

    removeItem(key) {
        delete this.dataStore[key];
    }


    print() {
        for (const key of Object.keys(this.dataStore)) {
            console.log(key + ' ' + this.dataStore[key])
        }
    }

    // returns the size of dictionary
    count() {
        let n = 0
        for (const key of Object.keys(this.dataStore)) {
            n += 1
        }
        return n;
    }

    // Clear entire dictionary
    clearAll() {
        for (const key of Object.keys(this.dataStore)) {
            delete this.dataStore[key];
        }
    }

}

const phoneBook = new Dictionary();
phoneBook.addItem('Julliet', '0713988843')
phoneBook.addItem('Mum', '07139825543')
phoneBook.addItem('Charles', '0713552943')

phoneBook.print();
