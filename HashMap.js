// Hashmap example with hash key that may likely cause collission

class NaiveHashTable {
    constructor() {
        this.table = new Array(137)
    }

    simpleHash(data) {
        let position = 0;

        for (let i = 0; i < data.length; i++) {
            position += data.charCodeAt(i);
        }
        return position % this.table.length;;
    }


    put(value) {
        let position = this.simpleHash(value);
        this.table[position] = value;
    }

    showDistribution() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i] != undefined) {
                console.log(i + ': ' + this.table[i])
            }
        }

    }

}

const students = ["David", "Jennifer", "Donnie", "Raymond",
    "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
const hTable = new NaiveHashTable();
for (let i = 0; i < students.length; i++) {
    hTable.put(students[i]);
}


hTable.showDistribution();