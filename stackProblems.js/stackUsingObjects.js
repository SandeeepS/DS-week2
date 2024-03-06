//stack using objects 

class Stack{
     constructor(){
        this.head = null;
        this.size = 0;
     }

     push(value){
        const newNode = {
            data : value,
            next : null
        }

        if(this.size == 0){
            this.head = newNode;

        }else{
            newNode.next = this.head;
            this.head = newNode
        }
        this.size++;
     }

     pop(){
        if(this.size == 0){
            console.log("stack underflow!");
            return;
        }

        if(this.size == 1){
            this.head = null;
            this.size--;
        }else{
            let prev = this.head.next;
            this.head = prev;
            this.size--;
        }

     }

     peek(){
        console.log(this.head.data);
     }

     print(){
        if(this.size == 0){
            console.log("the stack is empty");
            return;
        }
        let prev = this.head;
        let elements = '';
        while(prev){
            elements += `${prev.data} `;
            prev = prev.next;
        }
        console.log(elements);
     }
}

let stack1 = new Stack();
stack1.push(10);
stack1.push(20);
stack1.push(45);
stack1.push(50);


stack1.print();
stack1.peek();