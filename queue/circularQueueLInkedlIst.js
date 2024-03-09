 class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        
    }
 }

 class circularQueueLinkedList{
     constructor(){
        this.front = null;
        this.rear = null;
        this.size = 0;
     }

     isEmpty(){
        return this.size === 0;
     }

     enqueue(element){
        const node = new Node(element);
        if(this.size == 0){
            this.front = node;
            this.rear = node;
            node.next = this.front;
        }else{
            this.rear.next = node;
            node.next = this.front;
            this.rear = node;
        }
        this.size ++
     }

     dequeue(){
       if(this.isEmpty()){
          console.log("queue is empty");
       }
       let value ;
       if(this.size === 1){
          value = this.front.value;
          this.front = null;
          this.rear = null;
       }else{
          let temp = this.front;
          let value = temp.value;
          this.front = this.front.next;
          this.rear.next = this.front;
       }
       this.size--;
       return value;
     }

     print(){
        if(this.isEmpty()){
            return null;
        }else {
            let current = this.front;
            let elements = '';
            do {
                elements += `${current.value} `
                current = current.next;
            } while(current !== this.front);
            console.log(elements);
            return elements;
        }
     }

     getFront(){
        return this.front.value;
     }

     getRear(){
        return this.rear.value;
     }
 }

 const queue = new circularQueueLinkedList();
console.log(queue.print());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);

queue.print();

queue.print();
console.log(queue.getFront());
console.log(queue.getRear());