// This is a hasmap with lower chances of collison
// First ensure that the size if a prime number that is over 100 eg 137
// Use Horner’s method ---> you will add an extra step by multimplying the total ASCII value by a constant prime number

// Hashmap example with hash key that may likely cause collission

class NaiveHashTable {
    constructor() {
        this.table = new Array(137)
    }


    // Implements Horner’s method.
    getHashWithLessCollisions(data) {
        let total = 0;
        const hornersPrimeConstant = 37; 

        for (let i = 0; i < data.length; i++) {
            total += hornersPrimeConstant * total + data.charCodeAt(i);
        }

       let position = parseInt(total % this.table.length)
        return position;
    }


    put(value) {
        let position = this.getHashWithLessCollisions(value);
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