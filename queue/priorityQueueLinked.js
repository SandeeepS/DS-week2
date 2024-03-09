class Node{
    constructor(value,priority){
              this.value = value;
              this.priority = priority;
              this.next = null;

    }
    
}

class PriorityQueue{
    constructor(){
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
            while (current && current.priority <= priority) {
                if (current.next === null) {
                    break;
                }
                current = current.next;
            }
            if (current === this.head) {
                newNode.next = this.head;
                this.head = newNode;
            } else {
                newNode.next = current.next;
                current.next = newNode;
            }
        }
        this.size++;
    }

    print(){
        if(this.isEmpty()){
            console.log("queue is empty");
        }
        else{
            let prev = this.head ;
            let element = '';
            while(prev){
                element += `${prev.value} `;
                prev = prev.next
            }
            console.log(element);
        }

    }
}

const pQueue = new PriorityQueue();
pQueue.enqueue(20,1);
pQueue.enqueue(30,3);
pQueue.enqueue(40,4);
pQueue.enqueue(50,2);
pQueue.print();