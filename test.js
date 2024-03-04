//priority queue using linkedlist 

class Node {
     constructor(value,priority){
        this.value = value;
        this.priority = priority;
        this.next = null;
     }
}

class PriorityQueue{
     constructor() {
           this.head = null;
           this.tail = null;
           this.size = 0;
     }

     isEmpty(){
        return this.size === 0 
     }
     enqueue(element, priority) {
        const newNode = new Node(element, priority);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            let current = this.head;
            let prev = null;
            while (current && current.priority <= priority) {
                prev = current;
                current = current.next;
            }
            if (!prev) {
                newNode.next = this.head;
                this.head = newNode;
            } else {
                newNode.next = current;
                prev.next = newNode;
            }
            if (!current) {
                this.tail = newNode;
            }
        }
        this.size++;
    }

    dequeue(){
        if(this.isEmpty()){
            console.log("the queue is empty");
        }
           
        const elem = this.head.value;
        this.head = this.head.next;
        this.size--;
        return elem;
    }

     print(){
        if(this.isEmpty()){
            console.log("the queue is empty");
        }else{
            let prev = this.head;
            let elements = '';
            while(prev){
                elements += `${prev.value} `;
                prev = prev.next;
            }

            console.log(elements);
        }
     }
}

const queue = new PriorityQueue();
queue.enqueue(10,1);
queue.enqueue(20,2);
queue.enqueue(30,3);
queue.enqueue(60,2);
queue.print();
console.log(queue.dequeue());
queue.print();
