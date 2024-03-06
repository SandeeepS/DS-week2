//implimentation of stack using array.

class stack{
    constructor(size){
        this.item = [];
        this.size = size;
    }

    isEmpty(){
        return this.item.length === 0
    }

    push(element){
       if(this.item.length >= this.size){
             console.log("stack overflow");
       }else{
            this.item.push(element);
       }
        
    }

    pop(){
        if(this.item.length == 0){
            console.log("stack underflow");
        }else{
            this.item.pop();
        }
        
    }

    print(){
        console.log(this.item);
    }

    peek(){
        console.log(this.item[this.item.length - 1]);
    }

    getSize(){
        console.log(this.item.length);
    }
}

let stack1 = new stack(5);

stack1.push(10);
stack1.push(20);
stack1.push(30);
stack1.push(40);
stack1.push(50);
stack1.push(60);
stack1.print();
stack1.getSize();


stack1.peek();