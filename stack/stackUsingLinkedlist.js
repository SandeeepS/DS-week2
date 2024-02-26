class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedListStack{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    push(value){
        const node = new Node(value);
        if(this.size == 0 ){
            this.head = node;
            this.tail = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.size ++;
    }

    pop(){
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

    getHead(){
        console.log(this.head.value);
    }
    getTail(){
        console.log(this.tail.value);
    }
}

let stack1 = new LinkedListStack();
stack1.push(10);
stack1.push(20);
stack1.push(30);
stack1.push(50);
stack1.print();
stack1.pop();
stack1.print();
stack1.getHead();
stack1.getTail();

