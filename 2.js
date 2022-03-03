class Stack {
    constructor() {
        this.first = null;
        this.length = 0;
    }
    size() {
        console.log(this.length);
    }
    push(data) {
        const node = new Node(data);
        if (!this.first) {
            this.first = node;
        } else {
            let last = this.first;
            while (last.link) {
                last = last.link;
            }
            last.link = node;
        }
        this.length++;
    }
    pop() {
        if (!this.first) return console.log(null);
        if (this.length === 1) {
            console.log(this.first.data);
            this.first = null;
        } else {
            let last = this.first;
            if (this.length > 2) {
                for (let i = 0; i < this.length - 2; i++) {
                    last = last.link;
                }
            }
            console.log(last.link.data);
            last.link = null;
        }
        this.length--;
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.link = null;
    }
}
