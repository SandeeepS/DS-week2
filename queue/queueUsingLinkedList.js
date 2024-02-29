class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedListQueue{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enqueue(value){
        const node = new Node(value);
        if(this.size == 0 ){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            this.tail = node;
        }
        this.size ++;
    }

    dequeue(){
        if(this.size == 0){
            return ;
        }else{
            let prev = this.head;
            prev = this.head.next;
            this.head.next = null;
            this.head = prev;
        }
        this.size--;
    }

    print(){
        if(this.size == 0 ){
            console.log("the stack is empty");
        }else{
            let curr = this.head;
            let stackValues = '';
            while(curr){
                stackValues += `${curr.value} `;
                curr = curr.next;
            }
            console.log(stackValues);
        }
    }
 
    peek(){
        console.log(this.head.value);
    }
    getTail(){
        console.log(this.tail.value);
    }
}

let stack1 = new LinkedListQueue();

stack1.enqueue(10);
stack1.enqueue(20);
stack1.enqueue(30);
stack1.print();
stack1.peek();
stack1.getTail();
stack1.dequeue();
stack1.print();
stack1.peek();
stack1.getTail();
