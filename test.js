//stack using linked list

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class stack{
    constructor(size){
        this.head = null;
        this.size = size;
        this.currentLength = 0
    }

    isEmpty(){
        return this.currentLength === 0;
    }

    isFull(){
        return this.currentLength === this.size;
    }

    push(value){
          if(this.isFull()){
             console.log("stack overFlow");
             return
          }
          let node = new Node(value);
          if(this.isEmpty()){
             this.head = node;

          }else{
             node.next = this.head;
             this.head = node;
          }

          this.currentLength ++;
    }

    pop(){
        if(this.isEmpty()){
            console.log("stack underflow");
            return ;
        }
        if(this.currentLength == 1){
            this.head = null
        }else{
            let prev = this.head;
            prev = prev.next;
            this.head = prev;
        }
        this.currentLength--;
        
    }

    peek(){
        console.log(this.head.value);
    }

    reverse(){
        let stack2 = new stack(10);
        if(this.isEmpty()){
            console.log("stack underflow");
            return ;
        }
        if(this.currentLength == 1){
            this.head = null
            stack2.push(this.head.value);
        }else{
            let prev = this.head;
            while(prev){
                stack2.push(prev.value);
                prev = prev.next;
                this.head = prev;
            }
            stack2.print();
        }
        this.currentLength--;
    }

    print(){
        if(this.isEmpty()){
            console.log("the stack is empty");
            return 
        }else{
            let prev = this.head;
            let elements = '';
            while(prev){
                elements +=   `${prev.value} `;
                prev = prev.next;
            }
            console.log(elements);
        }
    }
}

let stack1 = new stack(10);
stack1.push("S");
stack1.push("A");
stack1.push("N");
stack1.push("D");
stack1.push("E");
stack1.push("E");
stack1.push("P");
stack1.reverse();

stack1.print();
