class Deque {
    constructor() {
        this.items = [];
    }

    // Add element at the end of the deque
    addRear(element) {
        this.items.push(element);
    }

    // Add element at the front of the deque
    addFront(element) {
        this.items.unshift(element);
    }

    // Remove element from the end of the deque
    removeRear() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.pop();
    }

    // Remove element from the front of the deque
    removeFront() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.shift();
    }

    // Check if the deque is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Display the deque
    display() {
        let str = "";
        for (let i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        console.log(str);
    }
}


const deque = new Deque();
deque.addFront(20);
deque.addFront(30);
deque.addFront(40);
deque.addRear(50);

deque.display();
deque.removeFront();
deque.display();