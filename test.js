class Node{
    constructor(value,priority){
        this.value = value;
        this.priority = priority;
        this.next = null;
    }
}

class PriorityQueue{
    constructor(){
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0
    }

    enqueue(value, priority){
        const node = new Node(value,priority)
        if(!this.front){
             this.front = node;
             this.rear = node;

        }else{
            let current = this.head;
            while(current && current.priority <= priority){
                if(current.next === null){
                    break;
                }
                current = current.next;
            }
            if(current === this.front){
                node.next = this.front
                this.front = node;
            }else{
                node.next = current.next;
                current.next = node;
            }
            
        }
        this.size ++;
    }
}