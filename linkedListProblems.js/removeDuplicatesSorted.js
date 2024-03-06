//list contain 1 , 2, 3 , 3 , 4, ,5 ,6,6 7,7;

class Node{
    constructor(value){
        this.value = value;
        this.next = null;

    }
}

class List{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    enqueue(value){
         let node = new Node(value);
         if(this.size == 0){
            this.head = node;
            this.tail = node;
         }else{
            this.tail.next = node;
            this.tail = node;
         }
         this.size ++;
    }

    print(){
        if(this.isEmpty()){
            return "queue is empty!";
        }else{
            let prev = this.head;
            let elements = '';
            for(let i = prev ; i <= this.tail ; i++)
            {
                elements += `${prev.value} `;
                prev = prev.next;
            }
            console.log(elements);
        }
    }
}

let queue = new List();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.print();