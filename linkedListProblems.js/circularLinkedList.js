//circular linked list
//singly list problem 

class Node{
    constructor(value){
        this.value = value;
        this.next  = null;
        this.prev = null;
    }
}

class doublyLinkedList{
    constructor(){
        this.head = null;
        this.prev = null;
        this.tail = null;
        this.size = 0;
    }
    isEmpty(){
        return this.size === 0
    }
    peek(){
        console.log(this.head.value);
    }
    prepend(value){
        let node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
            this.tail.next = this.head;
        }else{
            node.next = this.head;
            this.head.prev  = node;
            this.head = node;
            this.tail.next = node;
        }
        this.size ++;
    }
    append(value){
        let node = new Node(value);
        if(this.isEmpty()){
             this.head = node;
             this.tail = node;
             node.next = this.head;
        }else{
            this.tail.next = node;
            this.tail = node;
            node.next = this.head;
        }
        this.size ++;
    }
    print(){
        if(this.isEmpty()){
            console.log("list is empty");
            return;
        }
        let prev = this.head;
        let element = '';
        while(prev){
            element += `${prev.value} `;
            prev = prev.next;
        }
        console.log(element);
    }

    removeByValue(value){
        if(this.isEmpty()){
            console.log("the list is empty");
            return ;
        }
        if(this.head.value == value){
            console.log(0);
        }else{
            let prev = this.head;
            let i = 0;
            while(prev){
                if(prev.value == value){
                    console.log(i)
                }
                prev = prev.next;
                i++;
            }
        }
    }
}

let linkedList1 = new doublyLinkedList();
linkedList1.prepend(10);
linkedList1.prepend(20);
linkedList1.prepend(30);
linkedList1.append(100);
linkedList1.append(120);
linkedList1.print();
linkedList1.peek();

