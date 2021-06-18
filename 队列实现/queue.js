class Queue {
    constructor() {
        this.dataStore = [];
    }
    enqueue(elem) {
        this.dataStore.push(elem);
    }
    dequeue() {
        return this.dataStore.shift();
    }
    front() {
        return this.dataStore[0];
    }
    back() {
        return this.dataStore[this.dataStore.length - 1];
    }
    toString() {
        let str = '';
        for (let elem of this.dataStore) {
            str += `${elem}\n`;
        }
        return str;
    }
    isEmpty() {
        return !this.dataStore.length;
    }
}

let dancers = [
    {'F': 'Allison McMillan'},
    {'M': 'Frank Opitz'},
    {'M': 'Mason McMillan'},
    {'M': 'Clayton Ruff'},
    {'F': 'Cheryl Ferenback'},
    {'M': 'Raymond Williams'},
    {'F': 'Jennifer Ingram'},
    {'M': 'Bryan Frazer'},
    {'M': 'David Durr'},
    {'M': 'Danny Martin'},
    {'F': 'Aurora Adney'},
]

class Dancer {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex; 
    }
}