export default class List{
    constructor() {
        this.listSize = 0;
        this.pos = 0;
        this.dataStore = [];
    }
    get length() {
        return this.listSize;
    }
    find(elem) {
        let data = this.dataStore;
        for (let i = 0, len = data.length; i < len; i++) {
            if (data[i] === elem) {
                return i;
            }
        }
        return -1;
    }
    append(elem) {
        this.dataStore[this.listSize++] = elem;
    }
    remove(elem) {
        let index = this.find(elem);
        if (index > -1) {
            this.dataStore.splice(index, 1);
            --this.listSize;
            return true;
        }
        return false;
    }
    toString() {
        return this.dataStore.join(',');
    }
    insert(elem, after) {
        let index = this.find(after);
        if (index > -1) {
            this.dataStore.splice(index + 1, 0, elem);
        }
        return false;
    }
    clear() {
        delete this.dataStore;
        this.dataStore.length = 0;
        this.listSize = this.pos = 0;
    }
    contains(elem) {
        let index = this.find(elem);
        if (index > -1) return true;
        return false;
    }
    front() {
        this.pos = 0;
    }
    end() {
        this.pos = this.listSize - 1;
    }
    prev() {
        if (this.pos) --this.pos;
    }
    next() {
        if (this.pos < this.listSize) {
            ++this.pos;
        }
    }
    currPos() {
        return this.pos;
    }
    moveTo(position) {
        this.pos = position;
    }
    getElement() {
        return this.dataStore[this.pos];
    }
    hasNext() {
        return this.pos < this.listSize;
    }
    hasPrev() {
        return this.pos >= 0;
    }
}